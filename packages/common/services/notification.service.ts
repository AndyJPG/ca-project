import {NotificationService} from "../useCases/ports";

export const useNotificationService = (): NotificationService => {
    return {
        successNotify(message: string) {
            window.alert(message)
        },
        failNotify(message: string) {
            window.alert(message)
        }
    }
}
