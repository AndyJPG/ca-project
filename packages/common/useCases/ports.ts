import {Post} from "../domain";

export interface StorageService {
    createPost(newPost: Post): Promise<void>
}

export interface NotificationService {
    successNotify(message: string): void

    failNotify(message: string): void

    errorNotify(error: any): void
}

export interface PostStorageService {
    getPostsByAddressKeywords(keywords: string): Promise<any>

    postsMapper(rawPostsData: any): Array<Post>
}

export interface LocalStorageService {
    updatePosts(posts: Array<Post>): void
}
