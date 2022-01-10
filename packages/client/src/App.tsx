import React, {useEffect, useState} from 'react'
import {useAddNewHome} from "@ca/common/adapters"
import {HomeRepositoryService} from "@ca/common/services"
import {Home} from "@ca/common/domain"

function App() {
    const [homes, setHomes] = useState<Array<Home>>([])
    const [update, setUpdate] = useState(false)
    const [address, setAddress] = useState("")
    const [review, setReview] = useState("")

    const {addNewHome} = useAddNewHome()
    const homeRepo = new HomeRepositoryService()

    useEffect(() => {
        homeRepo.getAllHomes().then(data => setHomes(data))
    }, [update])

    const handleHomeSubmit = async () => {
        setUpdate(false)
        try {
            await addNewHome(address, review)
        } catch (e) {
            console.log("error")
        }
        setUpdate(true)
    }

    return (
        <div className="App">
            <input value={address} onChange={(e) => setAddress(e.target.value)}/>
            <input value={review} onChange={(e) => setReview(e.target.value)}/>
            <button onClick={handleHomeSubmit}>add new home</button>
            {homes.map(home => <div key={home.id}>{home.address}, {home.review}</div>)}
        </div>
    );
}

export default App;
