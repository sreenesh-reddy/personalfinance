import { addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../components/firebase/firebase";
import { collection } from "firebase/firestore";
import { auth } from "../components/firebase/firebase";
export default function useAdd(){
    const add = async (name,amount,type) => {
        
        const userData = JSON.parse(localStorage.getItem('auth'))
        console.log(userData)
        await addDoc(collection(db, "database"), {
            userId:userData.userId,
            name: name, 
            amount: amount, 
            type: type, 
            createdAt:serverTimestamp()    
        })
    }
    return {add}
}