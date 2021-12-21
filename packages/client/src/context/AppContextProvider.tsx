import React, {useState} from "react";
import {Order} from "@ca/common/domain/order";

interface IAppContext {
    orders: Order[]
    updateOrders: (orders: Order[]) => void
}

const AppContext = React.createContext<IAppContext>({
    orders: [],
    updateOrders: () => {}
})

export const useAppContext = () => React.useContext(AppContext)

export const AppContextProvider: React.FC = (props) => {
    const [orders, setOrders] = useState<Order[]>([])


    const value = {
        orders,
        updateOrders: setOrders
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
