import {Post} from "../domain";

export interface StorageService {
    createPost(newPost: Post): Promise<void>
}

export interface NotificationService {
    successNotify(message: string): void

    failNotify(message: string): void
}
