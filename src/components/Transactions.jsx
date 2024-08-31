import { Card, CardBody, VStack, Input, Button, Text, Heading, Stack, StackDivider, Box, Flex } from '@chakra-ui/react'
import { deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState,useRef } from 'react';
import { db } from './firebase/firebase';
import { SlCalender } from "react-icons/sl";
import useFetch from '../hooks/useFetch';
import { FaSearchDollar } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import Navbar from '../newComponents/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; 
export default function Transactions() {
    const { tran } = useFetch()
    const [trans, settrans] = useState(tran)
    const [date, setdate] = useState('')
    const scrollref= useRef(null)
    // const date = tran.createdAt.toDate()
    // const [searchQuery, setSearchQuery] = useState('')


    //0 for expense, 1 for income
    const [sumAmount, setsumAmount] = useState(0)
    const [hoverState, sethoverState] = useState(-1)
    const [updateState, setupdateState] = useState(-1)

    const deletetrans = async (id) => {
        const docref = doc(db, "database", id)
        await deleteDoc(docref)
    }

    const updateTrans = async (id) => {

        const docref = doc(db, "database", id)
        await updateDoc(docref, { name: name, amount: amount, type: type })

    }

    const search = (searchQuery) => {

        const searchQueryRegex = new RegExp(`^${searchQuery.toUpperCase()}`)
        settrans(tran.filter((item) => searchQueryRegex.test(item.name)));

    }
    useEffect(() => {
        console.log(tran.length)
        const scrollContainer = scrollref.current;
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smoothMobile: true,
    });

    const updateScroll = () => {
        requestAnimationFrame(() => {
            scroll.update();
        });
    };

    // Listen to changes
    updateScroll();
    settrans(tran);
    return () => {
        scroll.destroy();
    }
        
  
        
    }, [tran]);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('show')
            }
        })
    })
    const observer2 = new IntersectionObserver((e) => {
        e.forEach((en) => {

            if (en.isIntersecting) {
                en.target.classList.add('visble')
                observer2.unobserve(en.target)
            } else {
                en.target.classList.remove('visble')
            }
        })

    })
    // const hiddenElements = document.querySelectorAll('.hidden')
    // const appear = document.querySelectorAll('.invisble')
    // appear?.forEach((e) => {
    //     observer2.observe(e)
    // })
    // hiddenElements?.forEach((entry) =>
    //     observer.observe(entry)
    // )

    return (<div ref={scrollref} id="scroll-container">
        {/* HEADING      */}

        <Navbar/>
        <section className='TRANSACTIONS'>
            <Box justifyContent={"center"}>
                <div className="header">
                    <div className="title">
                        Transactions
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block', marginTop:"15px"}}>
                        <Input
                            style={{ paddingLeft: '40px' }} 
                            placeholder="Search..."
                            onChange={(e) => search(e.target.value)}
                            border="1px solid black"
                            rounded={100}
                            bg='transparent'
                            _hover={{border:"1px solid blue"}}
        
                        />
                        <FaSearchDollar
                            style={{
                                position: 'absolute',
                                left: '10px', 
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none'
                            }}
                            size={20} 
                        />
                    </div>
                </div>
                <br />
                {/* MAIN BODY */}
                {trans.length !== 0 ? trans.map((x) => (

                    <Stack spacing='10'>
                        <Box display='flex' flexDirection='column' w={1000} mb={3} style={{
                             border:"1px solid rgba(0, 0, 0, 0.1)",
                            backgroundColor: 'rgba(128, 128, 128,0.1)', backdropFilter: "blur(20px)",
                        }}
                            boxShadow='base' p={10} rounded={50} transition={"0.5s ease-in-out"} _hover={{ color: "blue.500", boxShadow: 'xl' }} onMouseEnter={() => sethoverState(x.id)} onMouseLeave={() => sethoverState(false)}>

            
                                {hoverState === x.id ?
                                    <Flex justifyContent="space-between">
                                        <Heading size='s' textTransform='uppercase'>
                                            {x.name}
                                        </Heading>
                                        <Box><span onClick={() => deletetrans(x.id)}><MdDeleteOutline size={25} cursor={"pointer"} /></span></Box>
                                    </Flex>
                                    :
                                    <Heading size='s' textTransform='uppercase'>
                                        {x.name}
                                    </Heading>

                                }

                                <Text fontSize='xs' mt={'10px'} mb={'10px'}>
                                    {x.createdAt?.toDate().toString()}
                                </Text>

                                {hoverState === x.id ?
                                    <Flex justifyContent="space-between">
                                        <Flex direction='row' pt='2'>
                                            {x.type === "1" ?
                                                <Text fontSize='xl' color={x.type === "1" ? "green.500" : "red.500"}>Rs +</Text>
                                                :
                                                <Text fontSize='xl' color={x.type === "1" ? "green.500" : "red.500"}>Rs -</Text>}
                                            <Text fontSize='xl'
                                                color={x.type === "1" ? "green.500" : "red.500"}
                                                _hover={{ color: "black" }}
                                            >
                                                {x.amount}
                                            </Text>
                                        </Flex>
                                        <span marginTop={"15px"} onClick={() => setupdateState(x.id)}>
                                            <GoPencil cursor={"pointer"} size={20} />
                                        </span></Flex>

                                    :
                                    <Flex direction='row' pt='2'>
                                        {x.type === "1" ? <Text fontSize='xl' color={x.type === "1" ? "green.500" : "red.500"}>Rs +</Text> : <Text fontSize='xl' color={x.type === "1" ? "green.500" : "red.500"}>Rs -</Text>}
                                        <Text fontSize='xl'
                                            color={x.type === "1" ? "green.500" : "red.500"}
                                            _hover={{ color: "black" }}
                                        >
                                            {x.amount}
                                        </Text>
                                    </Flex>
                                }



                                {updateState === x.id ?
                                    <Flex direction='column'>
                                        <Input placeholder='name' onChange={(e) => { setname(e.target.value) }} />

                                        <Input pt={"2"} onChange={(e) => { setamount(e.target.value) }} placeholder="amount" type="number" />
                                    </Flex>
                                    :
                                    null}
                        </Box>
                        </Stack>
                ))
                    : <Text fontSize={'xl'}>No Transactions found...</Text>
                }
            </Box >
            </section>
    </div>
    );
}