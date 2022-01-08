import {HomeStorageService} from "../useCases/ports";
import {Home} from "../domain";
import {sampleHomesData} from "../data/sampleHomesData";

export const useHomeStorageService = (): HomeStorageService => {
    return {
        homesMapper(rawPostsData: any): Array<Home> {
            const postsData = JSON.parse(rawPostsData)
            return postsData.data.map((post: any) => ({
                id: post.id,
                author: post.author,
                createdDate: post.createdDate,
                comments: post.comments,
                address: post.address
            }))
        },
        async getHomesByAddressKeywords(keywords: string): Promise<any> {
            let postsData = await sampleHomesData()
            postsData = JSON.parse(postsData)
            const filteredData = postsData.data.filter((data: any) => data.address.toLowerCase().includes(keywords.toLowerCase()))
            return JSON.stringify({
                data: filteredData
            })
        }
    }
}
