import * as React from 'react';
import {useCreateNewPost} from "@ca/common/useCases";
import {User} from "@ca/common/domain";

function App() {
    const {createNewPost} = useCreateNewPost()
    const newUser: User = {
        id: "uid_321",
        userName: "andy",
        email: "jiangpeigeng@gmail.com",
        comments: []
    }

    return (
        <div>
            App
            <button onClick={() => createNewPost(newUser, {
                streetAddress: "81 cooyong st",
                postcode: 2612,
                state: "ACT",
                suburb: "reid"
            })}>Create new post</button>
        </div>
    );
}

export default App;
