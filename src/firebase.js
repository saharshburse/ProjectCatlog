import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyANbMA5O38QL5eBUGuKdH_CBbmzw-xyYa8",
    authDomain: "gallery-8bea0.firebaseapp.com",
    projectId: "gallery-8bea0",
    storageBucket: "gallery-8bea0.appspot.com",
    messagingSenderId: "989392590690",
    appId: "1:989392590690:web:0727d11643ecc807fefe3b",
    measurementId: "G-49CK9MJS78",
    databaseURL:'https://gallery-8bea0-default-rtdb.asia-southeast1.firebasedatabase.app/'

}


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);