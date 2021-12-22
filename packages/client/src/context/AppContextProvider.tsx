import React, {useState} from "react";
import {Order} from "@ca/common/domain/order";
import {Cart} from "../../../common/domain/cart";
import {User} from "../../../common/domain/user";

const AppContext = React.createContext<any>({})

export const useAppContext = () => React.useContext(AppContext)

export const AppContextProvider: React.FC = (props) => {
    const [orders, setOrders] = useState<Order[]>([])
    const [cart, setCart] = useState<Cart>({products: []})
    const [user, setUser] = useState<User>()

    const value = {
        user,
        cart,
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
