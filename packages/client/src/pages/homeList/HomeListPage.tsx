import {CustomContainer} from "../../utils/muiStyleComponents";
import {HomeList} from "../../components";
import {useParams} from "react-router-dom";
import {useSearchHomes} from "@ca/common/useCases";
import {useEffect} from "react";
import {useHomeContext} from "../../store/HomeContext";

export const HomeListPage = () => {
    const params = useParams()
    const {searchHomes} = useSearchHomes()
    const {homes} = useHomeContext()

    useEffect(() => {
        searchHomes(params.keywords || "")
            .catch(e => console.log(e))
    }, [])

    return (
        <CustomContainer>
            <HomeList homes={homes}/>
        </CustomContainer>
    )
}
