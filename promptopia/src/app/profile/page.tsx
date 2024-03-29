'use client'
// Core
import {FC, useState, useEffect} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
// Components
import Profile from '@/components/profile/Profile';

const MyProfile: FC = () => {
    const {data: session} = useSession();
    const router = useRouter();
    const [posts, setPosts] = useState<IPost[]>([]);
    const handleEdit = (post: IPost) => {
        router.push(`/update-prompt?id=${post._id}`);
    }
    const handleDelete = async (post: IPost) => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if (session?.user.id) {
            fetchPosts();
        }
    }, [session])

    return (
        <Profile
            name="My"
            description="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
}

export default MyProfile;