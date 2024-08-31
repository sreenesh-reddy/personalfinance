import { getDocs, onSnapshot, orderBy } from "firebase/firestore";
import { useState,useEffect } from "react";
import { db } from "../components/firebase/firebase";
import { collection } from "firebase/firestore";
import { query,where } from "firebase/firestore";
export default function useFetch(){
    const [tran, settrans] = useState([])
    const [totalAmount,settotalAmount]= useState({balance:0, income:0, expense:0})
    const [maxIncTran,setmaxIncTran]=useState({name:'',amount:0})
    const [maxExpTran,setmaxExpTran] = useState({name:'',amount:0})
// const parseDate = (dateString) => {
//     const [month, day, year] = dateString.split('/').map(Number);
//     return new Date(year, month - 1, day).getTime()
// }
// const parseTime = (timeString) => {
//     const [time, modifier] = timeString.split(' ');
//     let [hours, minutes, seconds] = time.split(':').map(Number);
//     if (modifier === 'PM' && hours < 12) {
//         hours += 12;
//     } else if (modifier === 'AM' && hours === 12) {
//         hours = 0;
//     }
//     // Return the total number of seconds since midnight
//     return hours * 3600 + minutes * 60 + seconds;
// };
const fetch = async () => {
    const authinfo = JSON.parse(localStorage.getItem('auth'));

    const data = query(collection(db, "database"), where("userId","==",authinfo.userId), orderBy("createdAt","desc"))
    // const fildata = data.docs.map((x, id) => ({ ...x.data(), id: x.id }))
    // const sortedData = fildata.sort((a, b) => {
    //     const dateA = parseDate(`${a.date}`)
    //     const dateB = parseDate(`${b.date}`)
    //     if (dateA == dateB) {
    //         const A = parseTime(`${a.time}`)
    //         const B = parseTime(`${b.time}`)
    //         return B - A
    //     }
    //     else {
    //         return dateB - dateA
    //     }
    // });
    // settrans(sortedData)
    
  
    let unsub = onSnapshot(data,(snapshopt)=>{
        settotalAmount({balance:0, income:0, expense:0})
        let totalExpense=0
        let totalIncome=0
        let totalBalance=0
        let docs=[]
        let maxInc=0
        let IncName=''
        let maxExp=0
        let ExpName
        snapshopt.forEach((doc)=>{
                const data=doc.data()
                const id = doc.id
                docs.push({...data,id})
                if(data.type==='1'){
                    totalIncome+=Number(data.amount)
                    if(data.amount>maxInc){
                        maxInc=data.amount
                        IncName=data.name
                    }
                }else{
                    totalExpense+=Number(data.amount)
                    if(data.amount>maxExp){
                        maxExp=data.amount
                        ExpName=data.name
                    }
                }

        })
        totalBalance=totalIncome-totalExpense
        settrans(docs)
        settotalAmount({balance:totalBalance,income:totalIncome, expense:totalExpense})
        setmaxIncTran({name:IncName, amount:maxInc})
        setmaxExpTran({name:ExpName, amount:maxExp})
    })
    return ()=> unsub()
}

useEffect(() => {
    fetch()
}, [])

return({tran, totalAmount, maxExpTran,maxIncTran})
}