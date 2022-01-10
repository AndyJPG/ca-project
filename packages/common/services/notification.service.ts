import {INotificationService} from "../useCases/adapters";

export class NotificationService implements INotificationService {
    successNotify(message: string) {
        console.log(message)
    }

    failNotify(message: string) {
        console.log(message)
    }
}
