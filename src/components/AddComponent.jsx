import { Input, RadioGroup, Radio, Button, Stack, StackDivider, Box, Flex, background } from '@chakra-ui/react'
import { useState } from 'react';

import useAdd from '../hooks/useAdd';
import Navbar from '../newComponents/Navbar'


export default function AddComponent(){
    const [name, setname] = useState("")
    const [amount, setamount] = useState(0)
    const [type, setType] = useState(0)
    const [text,settext]= useState("")
    const [showText,setshowText]=useState(false)
    const {add}=useAdd(name,amount,type)
    const submit=(e)=>{
        setshowText(true)
        if(name && amount &&type){
        add(name,amount,type)
        settext("New transaction has been added!")
        }
        else{
            settext("please fill all the details")
        }
        setTimeout(()=>{
            setshowText(false)
        },3000)


    }
    return(
        <section className="addTransaction">
            <Navbar/>
        <div className="title">
            Add a new Transaction
        </div>
        <div className="Box">
            <Stack spacing={6}>

                <Input placeholder='Enter the Note' w={'30rem'} border={"0px solid black"} borderRadius={'100px'} color="black" required onChange={(e) => setname(e.target.value)} />
                <Input placeholder='Enter the amount' border={"0px solid black"} borderRadius={'100px'}  textColor={"black"} required onChange={(e) => setamount(e.target.value)} />
                <RadioGroup required onChange={setType} value={type}>
                    <Stack direction='row' justifyContent={'center'}>
                        <Radio value='0'>Expense</Radio>
                        <Radio value='1'>Income</Radio>
                    </Stack>
                </RadioGroup>
                <Button onClick={submit}  _hover={{border:"1px solid blue"}} border={"1px solid rgba(0, 0, 0, 0.5)"} borderRadius={'100px'} backgroundColor={"transparent"}>SUBMIT</Button>
            </Stack>
        </div>
       {showText?
       <span class="text">{text}</span>
       :null}

    </section>

    )
}