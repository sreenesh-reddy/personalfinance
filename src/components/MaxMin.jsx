import { Box, Card, CardBody, Heading, Stack,StackDivider,Text,Flex } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";

export default function MaxMin(){
    const {maxIncTran}=useFetch()
    const {maxExpTran}=useFetch()
    console.log(maxIncTran.name, maxExpTran.name)
    return(<>
    <Box w={"1000px"} ml={100} mt={50} mb={20} display='flex' stlyle={{ backgroundColor: "transparent", backdropFilter: "blur(20px)" }} flexDirection={'column'}>
        {/* <Text fontSize='xl' mb={'10px'}>Data</Text> */}
         
                <Stack divider={<StackDivider/>} spacing='4'>
                <Box boxShadow={'base'} rounded={100} p={3} m={3}>
                    <Flex direction='row'>
                        <Text  fontSize='xl' p={3} m={3} >Maxmium Income: </Text> <Text p={3} m={3}  color={"green.500"}>{maxIncTran.name} Rs {maxIncTran.amount}</Text>
                    </Flex>
                    </Box>
                    <Box boxShadow={'base'} rounded={100} p={3} m={3}>
                    <Flex direction='row'><Text fontSize='xl' p={3} m={3}>Maximum Expense: </Text> <Text p={3} m={3}  color={"red.500"}>{maxExpTran.name}Rs {maxExpTran.amount}</Text>
                </Flex>
                </Box></Stack>
            </Box>
  
    </>)
}