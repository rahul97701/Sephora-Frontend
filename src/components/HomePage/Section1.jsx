import { 
  Box, 
  Img, 
  SimpleGrid, 
  Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import cards from "../../Utils/Section1";

const Section1 = () => {
  const handleNavigation = useNavigate();

  const handleClick = (e) => {
    const category = e;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  const ImgBox = ({ src, category }) => {
    return (
      <Img
        onClick={() => handleClick(category)}
        alt="slider"
        width={"100%"}
        src={src}
      />
    );
  };

  return (
    <Box>
      <SimpleGrid
        gridTemplateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(3,1fr)"]}
        spacing={"20px"}
        px={["1", "2", "10", "40"]}
        py={"30px"}
      >
        {cards.map((e, i) => (
          <SimpleGrid color={e.clr} key={i} cursor={"pointer"}>
            <Box>
              <ImgBox src={e.img} category={e.category} />
            </Box>
            <Box p={"20px"} textAlign={"left"} bgColor={e.bg} h={"150px"}>
              <Text fontWeight={700} fontSize={"20px"}>
                {e.title}
              </Text>
              <Text
                fontSize={"14px"}
                _hover={{ textDecoration: "underline" }}
                mb={"5px"}
              >
                {e.description}
              </Text>
              <Text 
              fontSize={"14px"} 
              fontWeight={700} 
              _hover={{ textDecoration: "underline" }}>
                SHOP NOW ▸
              </Text>
            </Box>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Section1;
