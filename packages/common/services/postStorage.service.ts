import {PostStorageService} from "../useCases/ports";
import {Post} from "../domain";
import {samplePostsData} from "../data/samplePostsData";

export const usePostStorageService = (): PostStorageService => {
    return {
        postsMapper(rawPostsData: any): Array<Post> {
            const postsData = JSON.parse(rawPostsData)
            return postsData.data.map((post: any) => ({
                id: post.id,
                author: post.author,
                createdDate: post.createdDate,
                comments: post.comments,
                address: post.address
            }))
        },
        async getPostsByAddressKeywords(keywords: string): Promise<any> {
            let postsData = await samplePostsData()
            postsData = JSON.parse(postsData)
            const filteredData = postsData.data.filter((data: any) => data.address.toLowerCase().includes(keywords.toLowerCase()))
            return JSON.stringify({
                data: filteredData
            })
        }
    }
}
