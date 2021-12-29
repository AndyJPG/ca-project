import {NotificationService} from "../useCases/ports";

export function useNotifierService(): NotificationService {
    return {
        notify(message: string) {
            window.alert(message)
        }
    }
}
