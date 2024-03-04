'use client'

// Core
import {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from "react";
import {
    signIn,
    signOut,
    useSession,
    getProviders
} from 'next-auth/react';

const Nav: FC = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState<unknown | null>(null);

    const signOut = () => {}

    useEffect(() => {
        const setProvider = async () => {
            const response = await getProviders();
            setProviders(response)
        }

        setProvider();
    }, []);


    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2'>
                <Image
                    width={30}
                    height={30}
                    className='object-contain'
                    src='/assets/images/logo.svg'
                    alt='Probptopia logo'
                />
                <p className='logo_text'>Promptopia</p>
            </Link>
            <div className='sm:flex hidden'>
                {
                    isUserLoggedIn ?
                        <div className='flex gap-3 md:gap-5'>
                            <Link
                                className='black_btn'
                                href='/create-prompt'
                            >
                                Create Post
                            </Link>
                            <button
                                type='button'
                                className='outline_btn'
                                onClick={signOut}
                            >
                                Sign Out
                            </button>
                            <Link
                                href="/profile"
                            >
                                <Image
                                    width={37}
                                    height={37}
                                    src="/assets/images/logo.svg"
                                    className="rounded-full"
                                    alt="profile"
                                />
                            </Link>

                        </div> :
                        <>
                            {
                                providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                        key={provider.name}
                                        type='button'
                                        onClick={() => signIn(provider.id)}
                                        className='black_btn'
                                    >
                                        Sign In
                                    </button>
                                ))
                            }
                        </>
                }
            </div>
        </nav>
    );
}

export default Nav;