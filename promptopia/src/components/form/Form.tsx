'use client'

// Core
import {FC} from 'react';
// Types
import {FormPropTypes} from "@/components/form/Form.types";

const Form: FC<FormPropTypes> = (props) => {
    const {
        type,
        post,
        setPost,
        submitting,
        handleSubmit,
    } = props;
    return (
        <section className='w-full flex-col max-w-full flex-start'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Post</span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} and share amazing type in the world, and let your
                imagination run wild with any AI-powered platform.
            </p>
            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            >
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your AI Prompt
                    </span>
                    <textarea
                        value={post.prompt}
                        className='form_textarea'
                        onChange={(e) => setPost({
                            ...post,
                            prompt: e.target.value,
                        })}
                        placeholder='Write your prompt here...'
                        required
                    />
                </label>
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        <span className='pr-1'>Tag</span>
                        <span className='font-normal'>
                            (#product, #webdevelopment, #idea)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        className='form_input'
                        onChange={(e) => setPost({
                            ...post,
                            tag: e.target.value,
                        })}
                        placeholder='#tag'
                        required
                    />
                </label>
            </form>
        </section>
    );
}

export default Form;