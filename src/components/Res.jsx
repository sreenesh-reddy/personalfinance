import { Card, CardBody, Heading, Button,Flex,Box,Image,Input,Text} from "@chakra-ui/react";
import { googleProvider, auth } from "./firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import wallpaper from "../assets/wallpap.jpeg"
import logo from "../assets/google.png"

export function Res() {
    const navigate = useNavigate()
    const signIn = async () => {
        const res=await signInWithPopup(auth, googleProvider)
        const authinfo = { userId:res.user.uid,
                            name:res.user.displayName,
                            legit:true
         };
        localStorage.setItem('auth',JSON.stringify(authinfo))
        if (auth.currentUser !== null || JSON.parse(localStorage.getItem('auth')).userId !==null) { navigate('/') }
        else {
            alert('failed')
        }

    }

    return (
    <section className="Register">
      <img src={wallpaper} alt="Illustration" className="login-image" />
      

            LOG IN
            <div className="box">
                
       
                {/* <div className="input">
                <Input placeholder="User email"/>
                <Input placeholder="Password"/>
                <Button width={"100%"}>SUBMIT</Button>
                </div>
                
                <div class="text">There is no need to register,
                    simply login with proper credentials</div> */}
     
                <div className="Googlelogin">
                <Image marginTop={"5px"} src={logo} h={"30px"} w={"30px"}/>
                <Button style={{backgroundColor:"transparent"}} onClick={signIn}>SIGN IN</Button>
                </div>
              
                </div>
        </section>
) 
}