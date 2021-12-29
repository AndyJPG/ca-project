import {useOrdersStorageService} from "@ca/common/services";

export function Orders() {
    const {orders} = useOrdersStorageService();
    if (!orders.length) return null;

    return (
        <section>
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.created}>
                        {order.created} | {order.total / 100} ₽ | {order.status}
                    </li>
                ))}
            </ul>
        </section>
    );
}
