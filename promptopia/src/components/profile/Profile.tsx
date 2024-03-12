// Core
import { FC } from 'react';
// Types
import { ProfilePropTypes } from './Profile.types';
// Components
import PromptCard from '@/components/prompt-card/PromptCard';

const Profile: FC<ProfilePropTypes> = (props) => {
    const {
        name,
        description,
        data,
        handleDelete,
        handleEdit
    } = props;
    return (
        <section className="w-full">
            <h1>{name} Profile</h1>

        </section>
    );
}

export default Profile;