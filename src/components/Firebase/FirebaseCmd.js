import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from './Firebase'

const db = getFirestore(app);


function createUserDB(email,password){
    console.log(email, password);
}


export {
    createUserDB
}