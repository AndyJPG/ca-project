import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBiKG7RW743vPZOYW-eborUpykcQACNJxY",
  authDomain: "website-project-3ea2e.firebaseapp.com",
  databaseURL: "https://website-project-3ea2e.firebaseio.com",
  projectId: "website-project-3ea2e",
  storageBucket: "website-project-3ea2e.appspot.com",
  messagingSenderId: "951135603115",
  appId: "1:951135603115:web:c4e8188602251283976aee",
  measurementId: "G-9B61MBVDYS"
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const realDb = getDatabase(firebaseApp)