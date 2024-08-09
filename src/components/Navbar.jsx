import { Box } from "@chakra-ui/react";
import Header from "./Navbar/Header"
import Navbar1 from "./Navbar/Navbar1"
import Navbar2 from "./Navbar/Navbar2";
import Navbar3 from "./Navbar/Navbar3"



const Navbar = () => {
    return (
        <Box>
            <Header />

            <Navbar1 />

            <Navbar2 />

            <Navbar3 />
        </Box>
    );
};

export default Navbar;