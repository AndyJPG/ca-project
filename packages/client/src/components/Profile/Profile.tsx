import {useUserStorageService} from "@ca/common/services";
import {ingredients} from "@ca/common/domain";

export function Profile() {
    const {user} = useUserStorageService();
    if (!user) return null;

    return (
        <>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>Allergies</p>
            <ul>
                {user.allergies.map((ingredient) => (
                    <li key={ingredient}>{ingredients[ingredient]}</li>
                ))}
            </ul>
            <p>Preferences</p>
            <ul>
                {user.preferences.map((ingredient) => (
                    <li key={ingredient}>{ingredients[ingredient]}</li>
                ))}
            </ul>
        </>
    );
}
