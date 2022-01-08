import React from "react"
import {Home} from "@ca/common/domain";

interface HomeContextProps {
    homes: Array<Home>
    updateHomes: (newHomes: Array<Home>) => void
}

const HomeContext = React.createContext<HomeContextProps>({
    homes: [],
    updateHomes: (newHomes) => {
    }
})

export const useHomeContext = () => React.useContext(HomeContext)

export const HomeContextProvider: React.FC = (props) => {

    const [homes, setHomes] = React.useState<Array<Home>>([])

    const updateHomes = (newHomes: Array<Home>) => {
        setHomes(newHomes)
    }

    return (
        <HomeContext.Provider value={{
            homes,
            updateHomes
        }}>
            {props.children}
        </HomeContext.Provider>
    )
}
