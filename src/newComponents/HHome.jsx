import { auth } from "../components/firebase/firebase";

export default function HHome(){
    
    return(<>
    <section className="hero">
        <div>
        <p>Monitor. Manage. Master Your Money.</p>
        </div>
        <div>
            {auth.currentUser==null?<div className="Login"><a href="/auth">Login</a></div>:"Welcome"}
        </div>
    </section>
    </>)
}