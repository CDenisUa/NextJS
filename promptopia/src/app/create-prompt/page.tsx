'use client'

// Core
import {NextPage} from "next";
import {FormEventHandler, useState} from "react";
import {useSession} from "next-auth/react";
import {router} from "next/client";
// Components
import {Form} from "@/components";

const CreatePrompt: NextPage = () => {
    const {data: session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    const createPrompt: FormEventHandler<HTMLFormElement> | undefined = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        prompt: post.prompt,
                        userId: session?.user?.id ?? 'defaultId',
                        tag: post.tag
                    })
                });
            if(response.ok) {
                await router.push('/');
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    );
}

export default CreatePrompt;