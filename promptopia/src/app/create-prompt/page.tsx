'use client'

// Core
import {NextPage} from "next";
import {useState} from "react";
// Components
import { Form } from "@/components";

const CreatePrompt: NextPage = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    const createPrompt = async () => {

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