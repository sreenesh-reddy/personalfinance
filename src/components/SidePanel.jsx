import { CgProfile } from "react-icons/cg";
import { RxPlusCircled } from "react-icons/rx";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Flex, Box } from "@chakra-ui/react";
import useSignout from "../hooks/useSignout";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function SidePanel() {
    const nav= useNavigate()
    const { signout } = useSignout();

    return (<>
        <Flex direction='column'>
            <Box display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="calc(100vh - 20px)"
                p={1} position={"sticky"} top={0} left={0}  >
                <Box boxShadow='base' rounded={50} background={'white'} p={5} >
                <Box as="span" onClick={() => nav('/profile')} cursor="pointer" _hover={{ color:"blue.500"}}>
          <CgProfile size={30} />
        </Box>
        <br />
        <Box as="span" onClick={() => nav('/')} cursor="pointer" _hover={{ color: 'blue.500' }} >
          <RiMoneyDollarCircleLine size={30} />
        </Box>
        <br />
        <Box as="span" cursor="pointer" _hover={{ color: 'blue.500' }}>
          <RxPlusCircled size={30} />
        </Box>
        <br />
        <Box as="span" onClick={() => signout()} cursor="pointer" _hover={{ color: 'blue.500' }}>
          <RiLogoutCircleLine size={30} />
        </Box>
                </Box>
            </Box>
        </Flex>
    </>)
}