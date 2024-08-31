import { useState } from "react"
import HHome from "./HHome"
import Profile from "../components/Profile"
import Transactions from "../components/Transactions"
import { useNavigate } from "react-router-dom"
import { auth } from "../components/firebase/firebase"
import useSignout from "../hooks/useSignout"
export default function Navbar(){
    const {signout}=useSignout()
    const nav=useNavigate()
    const [navitems]=useState(['home','profile','transactions', 'add Transaction'])
    return(
        
            <header>
                <div className='logo'>
                    <div className="copyright"> © </div>  
                    Code by Sreenesh Reddy
                    
                </div>
                <nav>
                {navitems.map((value,key)=>(
                    <span key={key} className="active" onClick={()=>(nav(`/${value}`))}>{value}</span>
                ))} 
                {auth.currentUser!=null?
                <span key={'signout'} onClick={()=>signout()}>signout</span>
                :
                <span key={'login'} onclick={nav('/auth')}/>}
                </nav>

            </header>
       
    )
}