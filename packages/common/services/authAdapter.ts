import {AuthenticationService} from "../useCases/ports";
import {Email, UserName} from "../domain";
import {fakeApi} from "./fakeApi";

export function useAuthService(): AuthenticationService {
    return {
        auth(name: UserName, email: Email) {
            return fakeApi({
                name,
                email,
                id: "uid-101",
                allergies: ["cocoa", "cherry"],
                preferences: ["marshmallow", "peanuts"]
            })
        }
    }
}
