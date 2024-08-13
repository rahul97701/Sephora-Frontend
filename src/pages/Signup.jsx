    import { 
        Box,
        Input,
        Button,
        Divider,
        Flex,
        Image,
        Modal,
        ModalBody,
        ModalCloseButton,
        ModalContent, 
        ModalHeader, 
        ModalOverlay, 
        SimpleGrid,
        Text,
        useDisclosure,
        useToast,
        } from "@chakra-ui/react";
        
    import { useState } from "react";
    import axios from "axios";
    import Login from "./Login";
    import { useDispatch } from "react-redux";
    import { loginUser } from "../Redux/Login/actions";


    const Signup = () => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const dispatch = useDispatch();
        const [formData, setFormData] = useState({
            firsname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            zip: "",
        });

        const toast = useToast();

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({...formData, [name]: value});
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (formData.password !== formData.confirmPassword) {
                toast({
                    title: "Password mismatch",
                    description: "Passwords do not match. Please try again.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                return;
            }

            try {
                const response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/user/register`,
                    {
                        firstname: formData.firstname,
                        lastname: formData.lastname,
                        email: formData.email,
                        password: formData.password,
                        phone: formData.phone,
                        ZIP: formData.zip,
                    }
                );

                if (response.status === 201) {
                    toast({
                        title: "Account created",
                        description: `Congratulations ${formData.username}, you are registered!`,
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                    });
                    onclose();
                    const obj = { email: formData.email, password: formData.password};
                    dispatch(loginUser(obj));

                    const isAuthUser = { isAuth: true, data: formData.username };

                    localStorage.setItem("user", JSON.stringify(isAuthUser));
                    setFormData({
                        firsname: "",
                        lastname: "",
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        phone: "",
                        zip: "",
    
                    });
                }
                } catch (error) {
                    console.error("Error creating account", error);
                    toast({
                        title: "Error",
                        description:
                        error.response?.data?.message ||
                        "An error occurred while creating your account.",
                        status: "error",
                        duration: 3000,
                        isClosable: true, 
                    });
                }
            };
    
        return (
            <Box>
                <Button
                color={"black"}
                border={"1px solid black"}
                bgColor={"white"}
                borderRadius={"20px"}
                onClick={onOpen}
                >
                    Create Account
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            Create Account
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form>
                                <SimpleGrid>
                                    <Box>
                                    <Image 
                                    src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"
                                    w={"100%"}
                                    />
                                    </Box>
                                    <Text fontSize={"14px"} fontWeight={400}>
                                    Join the Beauty Insider loyalty program. Earn points, get
                                    <Text fontWeight={700} fontSize={"14px"}color={"black"}>
                                    FREE standard shipping
                                    
                                        </Text> 
                                        , redeem rewards, and more.
                                    </Text>
                                    <span>
                                        <Input 
                                        name="firstname"
                                        placeholder="First Name"
                                        value={formData.firstname}
                                        onChnage={handleChange}
                                        required
                                        />
                                        <Input 
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                        />
                                        </span>
                                        
                                        <Input 
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        />

                                    <Input 
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        />

                                        <Input 
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="ConfirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        />

                                        <Flex gap={"12px"}>
                                        <Input
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        />


                                        <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Sign me up for Sephora marketing text alerts.
                                        </label>
                                        </div>

                                        <Input
                                        name="zip"
                                        placeholder="ZIP Code"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                        />
                                        </Flex>
                                        <Divider color={"grey"}/>

                                        <Text>
                                        Sephora Text Alerts Disclosure: By entering your phone number, checking the Sign me up for Sephora marketing text alerts checkbox,
                                        clicking the “Join Now” button and confirming sign-up, you consent and agree to receive recurring autodialed marketing texts,
                                        including abandoned cart reminders, and confirm that you have read and agree to the TEXT TERMS. Message frequency varies. 
                                        Consent is not a condition of purchase. Message & data rates may apply. See our PRIVACY POLICY and NOTICE OF FINANCIAL INCENTIVE. Text STOP to cancel at any time. HELP for help.
                                        By clicking “Join Now” you acknowledge that you are a U.S. or Canada resident and (1) have read Sephora’s Privacy Policy and Notice of Financial Incentive, (2), agree to TERMS OF USE, BEAUTY INSIDER TERMS, and to automatically receive Beauty Insider offers and notifications via email.
                                        </Text>

                                        <Button
                                        bgColor={"black"}
                                        color={"white"}
                                        borderRadius={"20px"}
                                        _hover={{ bgColor: "grey"}}
                                        type="submit">
                                            Join Now
                                        </Button>
                                        </SimpleGrid>
                                        </form>
                                                
                                    <Divider />
                                    <SimpleGrid spacing={"12px"} py={"20px"}>
                                    <Text>Already have an account?</Text>
                                    <Box w={"40%"}>
                                        <Login />
                                    </Box>
                                    </SimpleGrid>
                                            </ModalBody>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            );
                        };

    export default Signup;