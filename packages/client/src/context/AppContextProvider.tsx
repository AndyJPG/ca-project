import React, {useState} from "react";
import {User, Order, Cart} from "@ca/common/domain";
import {cookies} from "@ca/common/services";

const AppContext = React.createContext<any>({})

export const useAppContext = () => React.useContext(AppContext)

export const AppContextProvider: React.FC = (props) => {
    const [orders, setOrders] = useState<Order[]>([])
    const [cart, setCart] = useState<Cart>({products: []})
    const [user, setUser] = useState<User>()

    const value = {
        user,
        cart,
        cookies,
        orders,
        updateUser: setUser,
        updateCart: setCart,
        updateOrders: setOrders,
        emptyCart: () => setCart({products: []})
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
