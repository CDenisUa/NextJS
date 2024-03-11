'use client'
// Core
import {FC, useState} from 'react';
import Image from 'next/image';
// Types
import {PromptCardPropTypes} from './PromptCard.types';

const PromptCard: FC<PromptCardPropTypes> = (props) => {
    const {
        post,
        handleTagClick,
        handleEdit,
        handleDelete
    } = props;

    const [copied, setCopied] = useState();

    return (
        <div className='prompt_card'>
            <div className='flex flex-col justify-between items-start gap-1.5'>
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                    <Image
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                        src={post.creator.image}
                        alt='user_image'
                    />

                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900'>
                            {post.creator.username}
                        </h3>
                        <p className='font-inter text-sm text-gray-500'>
                            {post.creator.email}
                        </p>
                    </div>
                    <div
                        className='copy_btn'
                        onClick={() => {}}
                    >
                        <Image
                            src={copied === post.prompt ?
                                '/assets/icons/tick.svg' :
                                '/assets/icons/copy.svg'}
                            width={12}
                            height={12}
                            alt='tick or copy icons'
                        />
                    </div>
                </div>
                <p className='my-2 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
                <p
                    onClick={() => handleTagClick && handleTagClick(post.tag)}
                    className='font-inter text-sm blue_gradient cursor-pointer'
                >
                    {post.tag}
                </p>
            </div>
        </div>
    );
}

export default PromptCard;