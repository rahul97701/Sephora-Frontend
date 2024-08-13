import { 
    Box,
    Flex,
    Img,
    SimpleGrid,
    Spinner,
    Button,
    useToast,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IS_LOADING, NO_LOADING, ERROR } from "../Redux/Loading/actionTypes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.loading);

    const [data, setData ] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const toast = useToast();

    const fetchData = async () => {
        try {
            dispatch({ type: IS_LOADING });

            const res = await axios.get(
                `${"import.meta.env.VITE_API_URL"}/product/${id}`
            );

            setData(res.data.Product);
            setSelectedImage(res.data.Product.images[0]);

            dispatch({ type: NO_LOADING });
        } catch (error) {
            console.error("Error fetching product data:", error.message);

            dispatch({ type: ERROR });

            toast({
                title: "Error Fetching Data",
                description: "Failed to load product details. Please try again later.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right",
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "instant",
        });
    }, []);

    const handleClick = async () => {
        try {
            const user = localStorage.getItem("user");
            if (!user) {
                throw new Error("user not logged in");
            }

            const { token } = JSON.parse(user);
            if (!token) {
                throw new Error("Authentication token not found");
            }

            await axios.post(
              `${import.meta.env.VITE_API_URL}/cart/add/${id}`,
              {},
              {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
              }
            );

            toast({
                title: "Product Added to Cart",
                description: `${data.title} has been successfully added to your cart.`,
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top", 
            });
          } catch (error) {
            console.error("Error adding product to cart:", error);
          
          if (error.response) {
            console.error("Error response:", error.response.data);
          }

          toast({
            title: "Error",
            description: `Please Login first: ${error.message}`,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
    }
};

    return (
        <Box>
            <Navbar />
            {loading ? (
              <Flex justifyContent={"center"}
              alignItems={"center"}
              minHeight={"50vh"}
              >
                <Img src="https://www.sephora.com/img/ufe/loader.gif" alt={<Spinner />} />
              </Flex>
            ): (
                <SimpleGrid
                gridTemplateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                ]}
                gap={20}
                padding={["5px", "5px", "30px", "30px"]}
                width={"80%"}
                margin={"auto"}
                >
                    <Box>
                        <Img
                         src={selectedImage}
                         alt={"Main Image"}
                         boxSize={"50px"}
                         border={"2px solid rgba(0,0,0.2)"}
                         marginBottom={5}
                         />
                         <Flex 
                         marginTop={5}
                         >
                            {data.images && 
                            data.images.map((image, i) => (
                            <Img
                            key={i}
                            src={image}
                            alt={`Thumbnaul ${i + 1}`}
                            boxSize={"100px"}
                            objectFit={"cover"}
                            border={"1px solid rgba(0,0,0,0.2)"}
                            marginRight={2}
                            cursor={"pointer"}
                            onClick={() => setSelectedImage(image)}
                            opacity={selectedImage === image ? 0.7 : 1}
                             />
                            ))}
                         </Flex>
                    </Box>

                    <SimpleGrid>
                        <Text
                        fontSize={"24px"}
                        fontWeight={500}
                        marginBottom={4}
                        >
                            {data.title}
                        </Text>
                        <Flex 
                        justifyContent={"space-between"}
                        marginBottom={4}
                        >
                        <Text fontWeight={500} fontSize={"20px"}>
                            Your Price
                        </Text>
                        <Text fontWeight={500} fontSize={"20px"}>
                            ${data.price}
                        </Text>
                        </Flex>
                        <Box marginBottom={6}>
                          <Text fontSize={"16px"}
                          >
                            {data.description}
                            </Text>
                        </Box>
                        <Button
                        background={"black"}
                        color={"white"}
                        _hover={{
                            color: "black",
                            background: "white",
                            border: "1px solid black",
                        }}
                        onClick={handleClick}
                        >
                            Add to Cart
                        </Button>
                    </SimpleGrid>
                </SimpleGrid>
            )}
            <Footer />
        </Box>
    );
}

export default Product;