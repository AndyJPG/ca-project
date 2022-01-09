import {HomeHeader, Reviews} from "../../components";
import {Divider} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSearchAHome} from "@ca/common/useCases/searchAHome";
import {Home} from "@ca/common/domain";

export const HomeDetailPage = () => {
    const [home, setHome] = useState<Home | null>(null)
    const params = useParams()
    const {searchAHome} = useSearchAHome()

    useEffect(() => {
        searchAHome(params.homeId || "")
            .then(home => setHome(home))
            .catch(e => console.log(e))
    }, [])

    if (!home) {
        return null
    }

    return (
        <CustomContainer>
            <HomeHeader title={home.address}/>
            <Divider/>
            <Reviews/>
        </CustomContainer>
    )
}
