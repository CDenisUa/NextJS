'use client'
// Core
import {ChangeEventHandler, DetailedHTMLProps, FC, InputHTMLAttributes, useEffect, useState} from 'react';
// Components
import PromptCard from '@/components/prompt-card/PromptCard';
import PromptCardList from '@/components/prompt-card-list/PromptCardList';

const Feed: FC = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState<IPost[]>([]);

    const handleSearchChange = (event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {

    };

    const handleTagClick = () => {}

    const fetchPosts = async () => {
        const response = await fetch('/api/prompt');
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    },[])
    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={handleTagClick}
            />
        </section>
    );
}

export default Feed;