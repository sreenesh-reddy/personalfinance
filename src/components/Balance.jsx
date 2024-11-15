import { Box, Card, CardBody, Stack, Heading, Text, StackDivider, Flex, background, Image } from "@chakra-ui/react"
import useFetch from "../hooks/useFetch"
import { auth } from "./firebase/firebase";
export default function Balance() {
    const { totalAmount } = useFetch();
    const { maxIncTran } = useFetch()
    const { maxExpTran } = useFetch()
    return (<section class="balance">
        <div class="Box">
        <Box display='flex' stlyle={{ backgroundColor: "transparent", backdropFilter: "blur(20px)" }} flexDirection={'column'}>
            <Flex direction='row' gap={4}>
                <Box p={4} _hover={{ boxShadow: 'xl'}} transition={"0.5s ease-in-out"}>
                    <Flex direction='column' m={3} p={3} justifyContent={"center"} alignItems={"center"}>
                    <Text fontSize='6xl' color={totalAmount.balance >= 0 ? "green.500" : "red.500"}>Rs {totalAmount.balance}</Text>

                        <Text fontSize='4xl' mb={"10px"}>
                            Balance
                        </Text>
                                            </Flex>
                </Box>
                <Stack spacing='4' >
                    <Box p={4} _hover={{ boxShadow: 'xl' }} transition={"0.5s ease-in-out"}>
                        <Flex direction='column' m={3} p={3}>
                            <Text fontSize='xl' >
                                Total Income
                            </Text>
                            <Text fontSize='md' color={'green.500'}>
                                Rs {totalAmount.income}
                            </Text>
                        </Flex>
                    </Box>
                    <Box  p={4} _hover={{ boxShadow: 'xl' }} transition={"0.5s ease-in-out"}>
                        <Flex direction='column' m={3} p={3}>
                            <Text fontSize='xl' >
                                Total Expense
                            </Text>
                            <Text fontSize='md' color={'red.500'}>
                                Rs {totalAmount.expense}
                            </Text>
                        </Flex>
                    </Box>
                </Stack >
                <Stack spacing='4'>
                    <Box p={4} _hover={{ boxShadow: 'xl' }} transition={"0.5s ease-in-out"}>
                        <Flex direction='column' m={3} p={3}>
                            <Text fontSize='xl'>Maxmium Income: </Text>
                            <Text fontSize='md' color={"green.500"}>{maxIncTran.name} Rs {maxIncTran.amount}</Text>
                        </Flex>
                    </Box>
                    <Box  p={4} _hover={{ boxShadow: 'xl' }} transition={"0.5s ease-in-out"}>
                        <Flex direction='column' p={3} m={3}>
                            <Text fontSize='xl'>Maximum Expense: </Text>
                            <Text fontSize='md' color={"red.500"}>{maxExpTran.name} Rs {maxExpTran.amount}</Text>
                        </Flex>
                    </Box>
                </Stack >
            </Flex>
        </Box >
        </div>
    </section>)
}