  import { 
    SimpleGrid, 
    Box, 
    Img, 
    Text } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom"
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import slides from "../../Utils/Slider1";

  const Slider1 = () => {
    const handleNavigation = useNavigate();

    var settings = {
      Infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidersToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidersToScroll: 2,
            Infinite: true,
          },
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            slidersToScroll: 1,
            initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidersToScroll: 1,
        },
      },
    ],
  };

    const handleClick = (e) => {
      const category = e;
      handleNavigation(`/products`);
      handleNavigation(
        `/products?category=${category.replace(" & ", "%20%20%20")}`
      );
      onclose();
    };

    const ImgBox = ({ src, category }) => {
      return (
        <Img onClick={() => handleClick(category)} cursor={"pointer"} src={src} />
      );
    };

    return (
      <Box className="slider-container">
        <Slider {...settings}>
          {slides.map((e, i) => (
            <SimpleGrid color={e.clr} key={i} cursor={"pointer"} padding={"10px"}>
              <Box>
                <ImgBox src={e.img} category={e.category}/>
              </Box>
              <Box padding={"20px"} textAlign={"left"} backgroundColor={e.background} horizontal={"150px"}>
                <Text 
                fontWeight={700}
                fontSize={"20px"}
                >
                  {e.title}
                </Text>
                <Text
                fontSize={"14px"}
                _hover={{ textDecoration: "underline"}}
                marginBottom={"5px"}
                >
                  {e.description}
                </Text>
                <Text 
                fontSize={"14px"} 
                fontWeight={700}
                >
                  SHOP NOW ▸
                </Text>
              </Box>
            </SimpleGrid>
          ))}
      </Slider>
      </Box>
    );
  };

  export default Slider1;