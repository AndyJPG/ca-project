import {Email, UserName} from "../domain/shared-kernel";
import {AuthenticationService, UserStorageService} from "./ports";
import {useAuth} from "../services/authAdapter";
import {useUserStorage} from "../services/storageAdapter";

export function useAuthenticate() {

    const storage: UserStorageService =  useUserStorage()
    const auth: AuthenticationService = useAuth()

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
