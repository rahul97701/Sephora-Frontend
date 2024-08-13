
    import {
        Box,
        Button,
        Divider,
        Flex,
        Heading,
        Img,
        SimpleGrid,
        Text,
        Spinner,
    } from "@chakra-ui/react";
    
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { getCartItems } from "../Redux/Cart/action";
    import { Link } from "react-router-dom";
    import GetSinglePro from "../components/GetSinglePro";
    import axios from "axios";
    
    const CartPage = () => {
        const dispatch = useDispatch();
        const data = useSelector((state) => state.cartData);
        const { loading } = useSelector((state) => state.loading);
        const [allProducts, setAllProducts] = useState([]);
    
        useEffect(() => {
        dispatch(getCartItems);
        }, [dispatch]);
    
        const subtotal = allProducts.reduce((acc, item) => {
        const price = parseFloat(item.price) || 0;
        return acc + price;
        }, 0);
    
        const estimatedTax = subtotal * 0.08;
        const estimatedTotal = subtotal + estimatedTax;
    
        const handleCheckout = async () => {
        const { token } = JSON.parse(localStorage.getItem("user"));
        try {
            await Promise.all(
            data?.map(async (el) => {
                await axios.delete(
                `${import.meta.env.VITE_API_URL}/cart/remove/${el.productId}`,
                {
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    },
                }
                );
            })
            );
    
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
        };
    
        useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "instant",
        });
        }, []);
    
        return (
        <Box>
            <Navbar />
            <Box 
            padding={[5, 5, 10, 20]}
            paddingTop={[5, 5, 5, 5]}
            >
            <Heading 
            fontSize="24px"
            fontWeight={700}>
                Shipping and Delivery Basket ({data.length})
            </Heading>
    
            <SimpleGrid
                gridTemplateColumns={[
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "2fr 1fr",
                "2fr 1fr",
                ]}
                alignItems={"start"}
            >
                <SimpleGrid gap={2}>
                {loading ? (
                    <Flex 
                    justifyContent="center" 
                    alignItems="center" 
                    minHeight="50vh">
                    <Img
                        src="https://www.sephora.com/img/ufe/loader.gif"
                        alt={<Spinner />}
                    />
                    </Flex>
                ) : data && data.length > 0 ? (
                    data.map((e, i) => (
                    <GetSinglePro
                        singleData={e}
                        key={i}
                        setAllProducts={setAllProducts}
                        allProducts={allProducts}
                    />
                    ))
                ) : (
                    <Box 
                    marginTop={5}
                    >
                    <Divider 
                    marginBottom={10} 
                    background={"grey"} 
                    height={0.8} />
    
                    <Text 
                    fontSize={"18px"} 
                    fontWeight={400} 
                    marginBottom={3}>
                        Your shopping cart is empty. Please add at least one item to
                        your cart before checking out.
                    </Text>
                    <Link to={"/"}>
                        <Button
                        marginBottom={4}
                        _hover={{ color: "white" }}
                        background={"black"}
                        color={"white"}
                        >
                        Continue Shopping
                        </Button>
                    </Link>
                    <Divider 
                    marginBottom={10} 
                    background={"grey"} 
                    maxHeight={0.8} />
                    </Box>
                )}
                </SimpleGrid>
    
                <SimpleGrid 
                gap={8} 
                padding={5}
                >
                <Box 
                padding={4} 
                border={"1px solid rgba(0,0,0,0.3)"}
                >
                    <Flex 
                    gap={"10px"} 
                    alignItems={"start"} 
                    marginBottom={"12px"}>
                    <Box 
                    width={"30px"}>
                        <Img
                        src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                        width={"100%"}
                        />
                    </Box>
                    <Text 
                    fontSize={"16px"}>
                        The Sephora Credit Card Program
                        <Text 
                        fontWeight={400} 
                        fontSize={"11px"}>
                        Save 25% on this order when you open and use either Sephora
                        Credit Card today
                        </Text>
                    </Text>
                    </Flex>
                    <Button
                    color={"black"}
                    backgroundColor={"white"}
                    border={"1px solid black"}
                    width={"100%"}
                    fontWeight={400}
                    >
                    See Details
                    </Button>
                </Box>
    
                <Box 
                padding={4} 
                fontWeight={400} 
                border={"1px solid rgba(0,0,0,0.3)"}
                >
                    <Flex marginBottom={4} 
                    justifyContent={"space-between"}
                    >
                    <Text>Subtotal</Text>
                    <Text>${subtotal}</Text>
                    </Flex>
                    <Flex 
                    marginBottom={3} 
                    fontSize={"14px"} 
                    justifyContent={"space-between"}>
                    <Text>Estimated Tax</Text>
                    <Text>${estimatedTax}</Text>
                    </Flex>
                    <Divider 
                    marginBottom={3} 
                    background={"grey"} />
                    <Flex
                    marginBottom={4}
                    justifyContent={"space-between"}
                    fontSize={"16px"}
                    fontWeight={700}
                    >
                    <Text>Estimated Total</Text>
                    <Text>${estimatedTotal}</Text>
                    </Flex>
                    <Text 
                    marginBottom={2} 
                    fontSize={"14px"} 
                    color={"rgb(112,112,112)"}>
                    Applicable taxes will be calculated at checkout.
                    </Text>
                    <Button
                    color={"white"}
                    _hover={{ color: "white" }}
                    width={"100%"}
                    fontWeight={400}
                    background={"black"}
                    onClick={handleCheckout}
                    >
                    Checkout
                    </Button>
                </Box>
                </SimpleGrid>
            </SimpleGrid>
            </Box>
            <Footer />
        </Box>
        );
    };
    
    export default CartPage;
    