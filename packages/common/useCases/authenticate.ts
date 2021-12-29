import {Email, UserName} from "../domain"
import {AuthenticationService, UserStorageService} from "./ports"
import {useAuthService, useUserStorageService} from "../services"

export function useAuthenticate() {

    const storage: UserStorageService = useUserStorageService()
    const auth: AuthenticationService = useAuthService()

    return {
        user: storage.user,
        authenticate: (name: UserName, email: Email) => authenticate(name, email, {storage, auth})
    }
}

type Dependencies = {
    auth: AuthenticationService
    storage: UserStorageService
}

async function authenticate(name: UserName, email: Email, dependencies: Dependencies): Promise<void> {
    const {auth, storage} = dependencies
    const user = await auth.auth(name, email)
    storage.updateUser(user)
}
