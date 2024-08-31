import { signOut } from "firebase/auth"
import { auth } from "../components/firebase/firebase"
import { useNavigate } from "react-router-dom"

export default function useSignout() {
    const navigate = useNavigate()
    const signout = async () => {
        try {
            await signOut(auth)
            localStorage.clear()
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }
    return ({ signout })
}