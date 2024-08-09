    import { 
        Box,
        Flex,
        SimpleGrid,
        Img,
        Text,
        Divider
        } from "@chakra-ui/react";
    import axios from "axios";
    import { useEffect, useState } from "react";
    
    function GetSinglePro({ singleData, setAllProducts }) {
        const [product, setProduct] = useState(null);
        const getProducts = async (productId) => {
            const API_URL = `${import.meta.env.VITE_API_URL}/product/${productId}`;
        
            try {
                const response = await axios.get(API_URL);
                setProduct(response.data.Product);
                setAllProducts((prevData) => [...prevData, response.data.Product]);
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getProducts(singleData?.productId);
        }, []);

        const handleRemove = async (id) => {
            const { token } = JSON.parse(localStorage.getItem("user"));
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/cart/remove/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                window.location.reload();
            } catch (error) {
                console.log(error.message);
            }
            };

        return (
            <Box key={product?._id} padding={5}>
                <Divider
                marginBottom={10}
                background={"grey"} 
                height={0.8}/>
                <SimpleGrid
                    gridTemplateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                    ]}
                    gap={5}
                    >
                        <SimpleGrid
                    gridTemplateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(2, 1fr)",
                    ]}  
                    >
                        <Box width={40}>
                            {product?.images && (
                            <Img src={product?.images[0]} alt={product?.title} />
                            )}
                        </Box>
                        <Box>
                            <Text
                            color={"blue"}
                            fontWeight={400}>
                            {product?.title}
                            </Text>
                            <Text
                            fontWeight={400}
                            fontSize={"13px"}
                            marginBottom={3}
                            >
                                ID:{product?._id}
                            </Text>
                            <Text 
                            fontWeight={400}
                            marginBottom={5}
                            >
                            ${product?.price}   
                            </Text>
                            <Text
                            color={"blue"}
                            _hover={{ textDecoration: "underline"}}
                            fontWeight={400}
                            cursor={"pointer"}
                            onClick={() => handleRemove(product?._id)}
                            >
                            Remove
                            </Text>
                            </Box>
                    </SimpleGrid>
                    <Flex>
                        <SimpleGrid
                        gap={2}
                        margin={"auto"}
                        >
                            <Box 
                            padding={2}
                            border={"1px, solid, rgba(0, 0, 0, 0.2)"}
                            >
                                <Text
                                marginBottom={2}
                                fontWeight={600}
                                >
                                Standard : Shipping & Handling Included
                                </Text>
                                <Text
                                fontSize={"12px"}
                                fontWeight={300}>
                                    Estimated Delivery
                                </Text>
                                <Text
                                fontWeight={600}
                                color={"green"}
                                >
                                5 to 6 Days Working Days
                                </Text>
                            </Box>

                            <Box
                            padding={2}
                            border={"1px solid rgba(0, 0, 0, 0.2)"}
                            >
                                <Text
                                marginBottom={2}
                                fontWeight={600}
                                >
                                Express 1 to 2 business Days : $4.96 
                            </Text>
                                <Text
                                fontWeight={300}
                                fontSize={"12px"}
                                >
                                Estimated Delivery
                                </Text>
                                <Text
                                fontWeight={600}
                                color={"green"}
                                >
                                2 to 3 Days
                                </Text>
                            </Box>
                            <Text
                            color={"blue"}
                            _hover={{ textDecoration: "underline"}}
                            fontWeight={400}
                            cursor={"pointer"}
                            >
                            Delivery Details
                            </Text>
                        </SimpleGrid>
                    </Flex>
                </SimpleGrid>
            </Box>
        );
    }

    export default GetSinglePro;