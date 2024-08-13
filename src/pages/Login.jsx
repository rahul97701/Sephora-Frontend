        import { 
            Button,
            ModalBody,
            ModalCloseButton,
            ModalContent, 
            ModalHeader, 
            ModalOverlay, 
            SimpleGrid,
            Text, 
            Box,
            Divider,
            Input,
            Modal,
            useDisclosure,
            useToast,
        } from "@chakra-ui/react"
        import { useDispatch, useSelector } from "react-redux";
        import Signup from "./Signup";
        import { useState } from "react";
        import { loginUser } from "../Redux/Login/actions";

        const Login = () => {
            const { isOpen, onOpen, onClose } = useDisclosure();
            const dispatch = useDispatch();
            const { isLogin } = useSelector((state) => state.loginState);
            const toast = useToast();

            const [credentials, setCredentials ] = useState({
                email: "",
                password: "",
            });

            const handleSubmit = (e) => {
                e.preventDefault();

                dispatch(loginUser(credentials));

                if (isLogin) {
                    toast({
                        title: "Login Successful",
                        description: `Login Successful`,
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                    onClose();
                } else {
                    toast({
                        title: "Error",
                        description: "Wrong Credentials",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                }
            };

            return (
                <Box>
                    <Button
                    color={"white"}
                    backgroundColor={"black"}
                    borderRadius={"20px"}
                    onClick={onOpen}
                    width={"100%"}
                    >
                        Sign In
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    Sign In
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <form onSubmit={handleSubmit}>
                                        <SimpleGrid
                                        spacing={"15px"}
                                        >
                                            <Text
                                            fontSize={"14px"}
                                            fontWeight={400}>
                                            Sign in or create an account to enjoy FREE standard shipping
                                            on all orders.
                                            </Text>
                                            <Input 
                                            type="email"
                                            placeholder={"Email Address"}
                                            onChange={(e) =>
                                                setCredentials((preventCredentials) => ({
                                                    ...preventCredentials,
                                                    email: e.target.value,
                                                }))
                                            }
                                            />
                                            <Input 
                                            type="password"
                                            placeholder={"Password"}
                                            onChange={(e) =>
                                                setCredentials((preventCredentials) => ({
                                                    ...preventCredentials,
                                                    password: e.target.value,
                                                }))
                                            }
                                            />
                                            <Text
                                            fontSize={"11px"}
                                            fontWeight={400}
                                            >
                                            By clicking “Sign In”, you (1) agree to the current version of
                                            our TERMS OF USE, and (2) have read Sephora’s Privacy Policy
                                            </Text>

                                            <Button
                                            backgroundColor={"black"}
                                            color={"white"}
                                            borderRadius={"20px"}
                                            _hover={{ backgroundColor: "grey"}}
                                            type="submit"
                                            >
                                            Sign In
                                            </Button>
                                        </SimpleGrid>
                                    </form>

                                    <Divider />
                                    <SimpleGrid 
                                    spacing={"12px"}
                                    paddingY={"20px"}
                                    >
                                        <Text>
                                            New to Sephora?
                                        </Text>
                                        <Signup />
                                    </SimpleGrid>
                                </ModalBody>
                            </ModalContent>
                        
                    </Modal>
                </Box>
            );
        };

        export default Login;
