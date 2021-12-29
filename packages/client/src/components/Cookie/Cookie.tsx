import {contains, Product} from "@ca/common/domain";
import {useAddToCart} from "@ca/common/useCases";
import styles from './Cookie.module.css'
import {useAppContext} from "../../context/AppContextProvider";
import {Toppings} from "./Toppings";

type CookieProps = {
    cookie: Product
}

const Cookie = ({cookie}: CookieProps) => {
    const {user, cart} = useAppContext()
    const {addToCart} = useAddToCart()

    return (
        <article className={styles.cookie}>
            <span className={styles.image}>🍪</span>
            <span className={styles.title}>{cookie.title}</span>
            <Toppings cookie={cookie}/>

            {!!user && (
                <button type="button" onClick={() => addToCart(user, cookie)}>
                    {cookie.price / 100} ₽
                </button>
            )}

            {contains(cart, cookie) && <span className={styles.contains}>In your cart</span>}
        </article>
    )
}

export default Cookie
