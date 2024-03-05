// Core
import NextAuth, {NextAuthOptions} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {Session} from 'next-auth';
import {connectToDB} from "@/utils/database";
// Models
import User from '@/models/user/user';
// Types
import {CustomSession} from "@/models/user/user.types";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    session: async ({session}: { session: Session }) => {
        if (session.user) {
            const sessionUser = await User.findOne({
                email: session.user.email,
            })

            if (sessionUser) {
                (session as CustomSession).user.id = sessionUser._id.toString();
                return session;
            }
        }
    },
    signIn: async ({profile}: { profile: any }) => {
        try {
            await connectToDB();
            const userExists = await User.findOne({
                email: profile.email,
            });

            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
} as NextAuthOptions);

export {handler as GET, handler as POST};
