import {PostStorageService} from "../useCases/ports";
import {Post} from "../domain";
import {samplePostsData} from "../data/samplePostsData";

export const usePostStorageService = (): PostStorageService => {
    return {
        postsMapper(rawPostsData: any): Array<Post> {
            return rawPostsData.data.map((post: any) => ({
                id: post.id,
                author: post.author,
                createdDate: post.createdDate,
                comments: post.comments,
                address: post.address
            }))
        },
        getPostsByAddressKeywords(keywords: string): Promise<Array<Post>> {
            return samplePostsData()
        }
    }
}
