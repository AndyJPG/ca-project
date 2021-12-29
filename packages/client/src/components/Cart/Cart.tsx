import {useCartStorageService} from "@ca/common/services"
import {totalPrice} from "@ca/common/domain";
import Cookie from "../Cookie/Cookie";
import styles from './Cart.module.css'

const Cart = () => {
    const {cart} = useCartStorageService()

    return (
        <>
            <h2>Cart</h2>
            <ul className={styles.list}>
                {cart.products.map((product) => (
                    <li key={product.id}>
                        <Cookie cookie={product}/>
                    </li>
                ))}
            </ul>
            <p>Total: {totalPrice(cart.products) / 100} $</p>
        </>
    )
}

export default Cart
