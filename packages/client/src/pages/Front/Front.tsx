import styles from "./Front.module.css";
import {useAppContext} from "../../context/AppContextProvider";
import {Product} from "@ca/common/domain";
import Cookie from "../../components/Cookie/Cookie";

export function Front() {
    const {cookies} = useAppContext();

    return (
        <main>
            <h1>Cookies</h1>

            <ul className={styles.list}>
                {cookies.map((cookie: Product) => (
                    <li key={cookie.id}>
                        <Cookie cookie={cookie}/>
                    </li>
                ))}
            </ul>
        </main>
    );
}
