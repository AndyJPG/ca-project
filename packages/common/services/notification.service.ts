import {NotificationService} from "../useCases";

export const useNotificationService = (): NotificationService => {
    return {
        successNotify(message: string) {
            window.alert(message)
        },
        failNotify(message: string) {
            window.alert(message)
        },
        errorNotify(error: any) {
        }
    }
}
