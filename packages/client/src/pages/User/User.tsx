import {Navigate} from "react-router";
import {useAppContext} from "../../context/AppContextProvider";
import Cart from "../../components/Cart/Cart";
import Buy from "../../components/Buy/Buy";
import {Profile} from "../../components/Profile/Profile";
import {Orders} from "../../components/Orders/Orders";

export function User() {
    const {user} = useAppContext();
    if (!user) return <Navigate to="/auth"/>;

    return (
        <main>
            <Profile/>
            <Orders/>
            <Cart/>
            <Buy/>
        </main>
    );
}
