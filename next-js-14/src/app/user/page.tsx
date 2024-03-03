// Core
import {NextPage} from "next";
// Styles
import styles from './styles.module.css';
// Types


const User: NextPage = async () => {
    const res = await fetch(
        `http://localhost:3000/api/user`
    );
    const data = await res.json();
    return (
        <div>
            {
                data.map((user: { id: number, name: string }) => (
                    <div key={user.id}>
                        <h2>ID: {user.id}</h2>
                        <p>{user.name}</p>
                    </div>
                ))
            }

        </div>
    );
}

export default User;