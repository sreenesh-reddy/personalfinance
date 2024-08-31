import Balance from "./Balance";
import MaxMin from "./MaxMin";

import { Flex,Box, Image,Text, textDecoration } from "@chakra-ui/react";
import SidePanel from "./SidePanel";
import { useState } from "react";
import Navbar from '../newComponents/Navbar'
import { auth } from "./firebase/firebase";
import Visualizations from "./Visualizations";
import MonthlyReport from "./MonthlyReport";
import Tips from "./Tips";
export default function Profile(){
  const List=["Visualizations","Insights","Monthly Report","Tips"]
  const [selectedItem,setselectedItem]=useState("Insights")
  const dict={"Insights":<Balance/>,"Visualizations":<Visualizations/>,"Monthly Report":<MonthlyReport/>, "Tips":<Tips/>}
return(<>
<Navbar/>

<section className="profileOptions">
<Flex alignItems={'center'} style={{gap:"50px"}}>
                <Image src={auth?.currentUser?.photoURL} style={{ "width": "100px", "height": "100px" }} rounded={'100px'} />
                <Text fontSize='5xl'>{auth?.currentUser?.displayName}</Text>
            </Flex>
  <nav>
    {List.map((value,key)=>(
        <span key={key} style={{ borderBottom: selectedItem===value?'1px solid black':'none'}} onClick={()=>{setselectedItem(value)}}>{value}</span>

    ))}
  </nav>
<div className="itembody">
{dict[selectedItem]}
</div>
</section>

</>)

}