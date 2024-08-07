import { Link } from "react-router-dom"
import SearchInput from "./SearchInput";
import { 
    SimpleGrid,
Box,
Text,
 } from "@chakra-ui/react"



const Navbar1 = () => {

    return (
        <Box>
            <SimpleGrid
                gridTemplateColumns={[
                    ".8fr 1fr .7fr",
                    ".8fr 1fr .7fr",
                    "1fr 2fr 1fr",
                    "1fr 1fr 2fr .5fr",
                ]}
                p={["0", "0px", "20px", "30px"]}
                pt={["10px", "10px", "20px", "30px"]}
                pb={["10px", "10px", "20px", "30px"]}
                alignItems={"center"}
                justifyContent={"center"}
                m={"auto"}
                gap={["5px", "5px", "40px", "20px"]}
                >
               <Link to={"/"}>
                   <Text fontWeight={600}
                   fontSize={["14px", "20px", "24px", "24px"]}
                   textAlign={["center", "center", "right", "left"]}
                   >
                    S E P H O R A
                    </Text> 
               </Link>
               <Box>
                <SearchInput />
               </Box>

            </SimpleGrid>
        </Box>
    )
}

export default Navbar1;