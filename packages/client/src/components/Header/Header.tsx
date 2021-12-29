import {useCartStorageService, useUserStorageService} from "@ca/common/services";
import styles from './Header.module.css'
import {Link} from "react-router-dom";

export function Header() {
    const {user} = useUserStorageService();
    const {cart} = useCartStorageService();

    return (
        <header className={styles.header}>
            <Link className={styles.logo} to="/">
                Co0o0o0o0okie!!!1 🍪
            </Link>

            {!user ? (
                <Link to="/auth">Log in</Link>
            ) : (
                <Link to="/user">
                    {user.name} ({cart.products.length})
                </Link>
            )}
        </header>
    );
}
