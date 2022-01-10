import {INotificationService} from "../useCases/adapters";

export class NotificationService implements INotificationService {
    successNotify(message: string) {
        window.alert(message)
    }
    failNotify(message: string) {
        window.alert(message)
    }
}
