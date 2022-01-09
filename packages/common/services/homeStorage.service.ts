import {HomeStorageService} from "../useCases";
import {Home} from "../domain";
import {sampleHomesData} from "../data/sampleHomesData";

export const useHomeStorageService = (): HomeStorageService => {
    return {
        async getHomesByAddressKeywords(keywords: string): Promise<any> {
            const keywordsList = keywords.split(" ")
            let homesData = await sampleHomesData()
            homesData = JSON.parse(homesData)

            const filteredData = homesData.data.filter((data: any) => keywordsList.some(keyword => data.address.toLowerCase().includes(keyword.toLowerCase())))

            return JSON.stringify({
                data: filteredData
            })
        },
        async getHomeById(homeId: string): Promise<any> {
            let homesData = await sampleHomesData()
            homesData = JSON.parse(homesData)
            return JSON.stringify({
                data: homesData.data.find((data: any) => data.id === homeId)
            })
        },
        homeMapper(rawHomeData: any): Home {
            const homeData = JSON.parse(rawHomeData).data
            return {
                id: homeData.id,
                author: homeData.author,
                createdDate: homeData.createdDate,
                comments: homeData.comments,
                address: homeData.address
            }
        },
        homesMapper(rawHomesData: any): Array<Home> {
            const homesData = JSON.parse(rawHomesData)
            return homesData.data.map((home: any) => ({
                id: home.id,
                author: home.author,
                createdDate: home.createdDate,
                comments: home.comments,
                address: home.address
            }))
        },
    }
}
