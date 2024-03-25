import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA7H_JwRhuqvjCI0kZFKhUu_SBeUGmtw3E",
    authDomain: "de-guzman-technical-exam.firebaseapp.com",
    projectId: "de-guzman-technical-exam",
    storageBucket: "de-guzman-technical-exam.appspot.com",
    messagingSenderId: "440490338209",
    appId: "1:440490338209:web:a797b31281de7012a48de0"
}

initializeApp(firebaseConfig)

const db = getFirestore()
export default db