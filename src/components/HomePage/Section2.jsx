import { SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"



const Section2 = () => {
    const handleNavigation = useNavigate();

    const handleClick = (e) => {
     const category = e
     handleNavigation(`/products`)
     handleNavigation(`/products?category=${category.replace(" & ", "%20%26%20")}`
     );
     onclose();
    };

    const TextCreate = ({ text, category }) => {
        return (
        <Text onClick={() => handleClick(category)}>{text}

        </Text>
        )
    }

    return (
      
        <Box px={["2", "2", "10", "40"]} py={"40px"}>
            <SimpleGrid
            gridTemplateColumns={["1fr", "1fr", "1fr", ".5fr 2fr"]}
            spacing={"20px"}>
        <Box>
            <Text fontWeight={700} fontSize={"20px"}>
                Featured Categories
            </Text>
            <Text fontWeight={400} fontSize={"14px"}>
              Shop what's popular now.
            </Text>
        </Box>
        <SimpleGrid
        gridTemplateColumns={[
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(5,1fr)",
            "repeat(8,1fr)",

        ]}
        spacing={"10px"}
        >
            {Card.map((e,i) => (
                <SimpleGrid
                key={i}
                gridAutoColumns={"1fr"}
                boxShadow={"base"}
                p={"10px"}
                spacing={"10px"}
                transition={"all .5s ease"}
                _hover={{ transform: "translateY(-5px)" }}
                cursor={"pointer"}
               >
                <TextCreate text={e.title} category={e.category} />
                <Flex w={"40px"} alignItems={"end"} 
                >
                    <Img src={e.img} w={"100%"} />
                    </Flex>
            </SimpleGrid>
            ))}
            </SimpleGrid>
            </SimpleGrid>
        </Box>
    );
};

export default Section2;