import React, {useState} from "react";

import {Email, UserName} from "@ca/common/domain";
import {useAuthenticate} from "@ca/common/useCases";
import styles from "./Auth.module.css";

export function Auth() {
    const [name, setName] = useState<UserName>("");
    const [email, setEmail] = useState<Email>("");
    const [loading, setLoading] = useState(false);

    const {user, authenticate} = useAuthenticate();
    if (!!user) return <div>You have loged in</div>;

    async function handleSubmit(e: React.FormEvent) {
        setLoading(true);
        e.preventDefault();

        await authenticate(name, email);
        setLoading(false);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                />
            </label>
            <label>
                <span>Email</span>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <button type="submit" disabled={loading}>
                {loading ? "Trying to login..." : "Login"}
            </button>
        </form>
    );
}
