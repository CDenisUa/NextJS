// Core
import {NextPage} from "next";
// Styles
import styles from './styles.module.css';
// Types
import { PostTypeProps } from './Post.types';

const Post: NextPage<PostTypeProps> = async (props) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.params.post_id}`,
        {next: { revalidate: 5}}
    );
    const data = await res.json();
    return (
        <div>
            <h1>{data.title}</h1>
            <h2>ID: {data.id}</h2>
            <p>{data.body}</p>
        </div>
    );
}

export default Post;