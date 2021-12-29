import {hasAllergy, hasPreference, ingredients, Product} from "@ca/common/domain";
import {useUserStorageService} from "@ca/common/services";

type ToppingsProps = {
    cookie: Product
}

export function Toppings({cookie}: ToppingsProps) {
    const {user} = useUserStorageService();

    return (
        <ul>
            {cookie.toppings.map((topping) => (
                <li key={topping}>
                    {ingredients[topping]}{" "}
                    {!!user && hasPreference(user, topping) && <>👍</>}{" "}
                    {!!user && hasAllergy(user, topping) && <>⚠️</>}
                </li>
            ))}
        </ul>
    );
}
