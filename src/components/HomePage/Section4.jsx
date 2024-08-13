import { 
  Box, 
  Img, 
  SimpleGrid, 
  Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import card2 from "../../Utils/Section4";

const Section4 = () => {
  const handleNavigation = useNavigate();

  

  const handleClick = (elem) => {
    const category = elem;
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
        px={["2", "2", "10", "40"]}
        py={"30px"}
      >
        {card2.map((elem, i) => (
          <SimpleGrid color={elem.clr} key={i} cursor={"pointer"}>
            <Box>
              <ImgBox src={elem.img} category={elem.category} />
            </Box>
            <Box p={"20px"} textAlign={"left"} bgColor={elem.bg} h={"150px"}>
              <Text fontWeight={700} fontSize={"20px"}>
                {elem.title}
              </Text>
              <Text
                fontSize={"14px"}
                _hover={{ textDecoration: "underline" }}
                mb={"5px"}
              >
                {elem.description}
              </Text>
              <Text fontSize={"14px"} fontWeight={700}>
                SHOP NOW ▸
              </Text>
            </Box>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Section4;
