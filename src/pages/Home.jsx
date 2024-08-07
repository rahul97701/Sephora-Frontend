import Section1 from "../components/HomePage/Section1";
import { Box, Divider } from "@chakra-ui/react";
import Section2 from "../components/HomePage/Section2";
import Section3 from "../components/HomePage/Section3";
import Section4 from "../components/HomePage/Section4";


const Home = () => {
    return (
        <Box>
            <Section1 />
            <Divider w={"80%"} m={"auto"} />
            <Section2 />
            <Divider w={"80%"} m={"auto"} />
            <Section3 />
            <Divider w={"80%"} m={"auto"} />
            <Section4 />
        </Box>
    );
};

export default Home;