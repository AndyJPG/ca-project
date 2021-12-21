import {useOrderProducts} from "@ca/common/useCases/orderProducts";

const Buy = () => {
    const {orderProducts} = useOrderProducts()

    const handleOrders = () => {
        const user = {id: "123", name: "andy", email: "jp@gmail.com", allergies: [], preferences: []}
        const cart = {
            products: [{
                id: "232",
                title: "burger",
                price: 123,
                toppings: []
            }]
        }
        orderProducts(user, cart).then(() => console.log("product added"))
    }
    return (
        <>
            <h2>Checkout</h2>
            <button onClick={handleOrders}>Checkout</button>
        </>
    )
}

export default Buy
