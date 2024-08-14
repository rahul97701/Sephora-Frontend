    import { SimpleGrid, Text, Img, Box } from "@chakra-ui/react";
    import { useNavigate } from "react-router-dom"
    import Slider from "react-slick";
    import arr from "../../Utils/HomePage/Slider2"


    const Slider2 = () => {
        const handleNavigation = useNavigate();

        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "grey",
                    borderRadius: "100px",
                }}
                    onClick={onClick}
            />
            );
        }

        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div 
                className={className}
                style={{
                    ...style,
                    background: "grey",
                    borderRadius: "100px"
                }}
                onClick={onClick}
                />
            );
        }

        const settings = {
            infinite: true,
            slidesToShow: 6,
            speed: 500,
            slidesToScroll: 6,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        nextArrow: false,
                        prevArrow: false,
                    },
                },
            ],
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
            <Box 
            padding={["2", "2", "10", "40"]}
            paddingTop={[5, 5, 5, 5]}
            paddingBottom={[10, 10, 10, 10]}
            >
            <Text
            fontWeight={650}
            fontSize={"21px"}
            >
                    Choosen For You
            </Text>

            <Slider {...settings}>
            {arr.map((e, i) => (
                <SimpleGrid 
                key={i}
                cursor={"pointer"}
                padding={"10px"}>
                    <SimpleGrid
                    boxShadow={"base"}
                    transition={"all .5s ease"}
                    _hover={{ transform: "translateY(-5px)" }}
                    p={["10px", "10px", "20px", "30px"]}
                    >
                    <Box
                    marginBottom={"10px"}
                    marginX={"auto"}
                    width={"150px"}
                    >
                        <ImgBox 
                        src={e.image} 
                        category={e.category}
                        />
                    </Box>
                    <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    >
                        {e.title}
                    </Text>
                    <Text
                    fontSize={"12px"}
                    fontWeight={400}
                    >
                        {e.description}
                    </Text>
                    <Text
                    fontSize={"15px"}
                    fontWeight={700}
                    >
                        {e.price}
                    </Text>
                </SimpleGrid>
                </SimpleGrid>
            ))}
            </Slider>
        </Box>
    );
}

    export default Slider2;