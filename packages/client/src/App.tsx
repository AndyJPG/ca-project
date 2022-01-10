import React, {useState} from 'react';
import './App.css';
import {useAddNewHome} from "@ca/common/adapters";

function App() {
  const [address, setAddress] = useState("")
  const [review, setReview] = useState("")

  const {addNewHome} = useAddNewHome()

  return (
    <div className="App">
      <input value={address} onChange={(e) => setAddress(e.target.value)}/>
      <input value={review} onChange={(e) => setReview(e.target.value)}/>
      <button onClick={() => addNewHome(address, review)}>add new home</button>
    </div>
  );
}

export default App;
