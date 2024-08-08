import { HamburgerIcon } from "@chakra-ui/icons";

import {
  SimpleGrid,
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  Button,
  PopoverBody,
  Img,
  Divider,
  Image,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import { BiBell, BiCurrentLocation, BiMessage } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiBasketLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import SearchInput from "./SearchInput";

const Navbar1 = () => {
  const { isLogin } = useSelector((state) => state.loginState);
  const handleNavigation = useNavigate();

  const data = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleClick = (e) => {
    const category = e;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  const TextCreate = ({ text, fontWeight, category }) => {
    return (
      <Text
        _hover={{ textDecoration: "underline" }}
        fontWeight={fontWeight}
        fontSize={"14px"}
        onClick={() => handleClick(category)}
        cursor={"pointer"}
      >
        {text}
      </Text>
    );
  };

  return (
    <Box overflow={"scroll"}>
      <SimpleGrid
        gridTemplateColumns={[
          ".8fr 1fr .7fr",
          ".8fr 1fr .7fr",
          "1fr 2fr 1fr",
          "1fr 1fr 2fr .5fr",
        ]}
        p={["0", "0px", "20px", "30px"]}
        pt={["10px", "10px", "20px", "30px"]}
        pb={["10px", "10px", "20px", "30px"]}
        alignItems={"center"}
        justifyContent={"center"}
        m={"auto"}
        gap={["5px", "5px", "40px", "20px"]}
      >
        <Link to={"/"}>
          <Text
            fontWeight={600}
            fontSize={["14px", "20px", "24px", "24px"]}
            textAlign={["center", "center", "right", "left"]}
          >
            S E P H O R A
          </Text>
        </Link>
        <Box>
          <SearchInput />
        </Box>
        <Flex
          gap={"40px"}
          alignItems={"center"}
          display={["none", "none", "none", "flex"]}
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                backgroundColor={"white"}
                borderRadius={"none"}
                _hover={{
                  backgroundColor: "white",
                  borderBottom: "2px solid #333",
                }}
              >
                <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                  <HiOutlineBuilderStoreFont />{" "}
                  <Text fontSize={"14px"}>
                    Stores & Services{" "}
                    <Text fontSize={"10px"}>Choose Your Store</Text>
                  </Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader textAlign={"center"} p={"18px"}>
                <Button
                  backgroundColor={"black"}
                  color={"white"}
                  borderRadius={"20px"}
                >
                  Choose Your Store
                </Button>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  alignItems={"center"}
                  gap={"7px"}
                  cursor={"pointer"}
                  paddingTop={"12px"}
                  paddingBottom={"12px"}
                >
                  s
                  <BiCurrentLocation />
                  <Text>Find a Sephora</Text>
                </Flex>
                <Divider />
                <SimpleGrid>
                  <Flex>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_makeup.svg" />
                    </Box>
                    <Text>
                      Makeup Services
                      <Text fontSize={"10px"} color={"grey"}>
                        One-on-one makeup application or beauty lesson
                      </Text>
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_skincare.svg" />
                    </Box>
                    <Text>
                      Skincare Services
                      <Text fontSize={"10px"} color={"grey"}>
                        Hydrating and exfoliating Perk treatments by Hydrafacial
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_waxing.svg" />
                    </Box>
                    <Text>
                      Waxing Services
                      <Text fontSize={"10px"} color={"grey"}>
                        Expert grooming for brows, upper lip, or chin
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img
                        src="https://www.sephora.com/contentimages/happening/flyoutmenu_events.svg"
                        w={"65px"}
                      />
                    </Box>
                    <Text>
                      Events
                      <Text fontSize={"10px"} color={"grey"}>
                        Learn about brands, try new products, and more at out
                        in-store events
                      </Text>
                    </Text>
                  </Flex>
                </SimpleGrid>
                <Divider />
                <Flex
                  color={"blue"}
                  cursor={"pointer"}
                  paddingTop={"15px"}
                  paddingBottom={"15px"}
                  fontSize={"14px"}
                  gap={"12px"}
                >
                  <Text _hover={{ textDecoration: "underline" }}>
                    My Reservation
                  </Text>
                  <Text>|</Text>
                  <Text _hover={{ textDecoration: "underline" }}>
                    Beauty Service FAQs
                  </Text>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
              <HiOutlineUserGroup />
              <Text fontSize={"14px"}>Hi, </Text>
            </Flex>
            <PopoverTrigger>
              <Button
                backgroundColor={"white"}
                borderRadius={"none"}
                _hover={{
                  backgroundColor: "white",
                  borderBottom: "2px solid #333",
                }}
              >
                <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                  <HiOutlineUserGroup />
                  <Text fontSize={"14px"}>Community</Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <Flex>
                  <Box>
                    <Img
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      width={"50px"}
                    />
                  </Box>

                  <Text fontWeight={700} fontSize={"14px"} margin={"20px"}>
                    Community Profile
                    <Text fontSize={"10px"} fontWeight={400} color={"grey"}>
                      Sign in to see your profile
                    </Text>
                  </Text>
                  <BiBell size={"25px"} />
                  <BiMessage size={"25px"} />
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  justifyContent={"center"}
                  gap={"12px"}
                  paddingTop={"8px"}
                  paddingBottom={"14px"}
                >
                  <Box w={"50%"}>
                    <Login />
                  </Box>
                  <Signup />
                </Flex>
                <Divider color={grey} />
                <SimpleGrid spacing={"15px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box width={"80px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text>
                      Community Home
                      <Text color={"grey"} fontSize={"11px"} fontWeight={400}>
                        Ask questions, join challenges, and get recommendations
                        from people like you
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={grey} />
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"50px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Groups
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Discover topics tailored to your beauty interests
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />

                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"70px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Gallery
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Add your photos and video and get inspired by fellow
                        beauty lovers
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />
                </SimpleGrid>
                <SimpleGrid spacing={"12px"}>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    fontWeight={700}
                    fontSize={"14px"}
                  >
                    Featured Groups
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    fontSize={"12px"}
                    fontWeight={400}
                  >
                    Trending at Sephora
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    fontSize={"12px"}
                    fontWeight={400}
                  >
                    Best Hair Ever
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    fontSize={"12px"}
                    fontWeight={400}
                  >
                    Lip Lovers
                  </Text>
                </SimpleGrid>
                <Divider color={"grey"} />
                <SimpleGrid>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    fontSize={"12px"}
                    fontWeight={400}
                  >
                    Join Community's Summer Cheek Challenge!
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    fontSize={"12px"}
                    fontWeight={400}
                  >
                    Share your Capsule Makeup Collections
                  </Text>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    fontSize={"12px"}
                    fontWeight={400}
                  >
                    Monthly Faves: Share your Top Products!
                  </Text>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover">
            <Button>Logout</Button>
            <PopoverTrigger>
              <Button
                backgroundColor={"white"}
                borderRadius={"none"}
                _hover={{
                  backgroundColor: "white",
                  borderBottom: "2px solid #333",
                }}
              >
                {" "}
                <Flex gap={"10px"} alignItems={"center"}>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"30px"}
                    >
                      {" "}
                    </Image>
                  </Box>
                  <Text fontSize={"14px"} fontWeight={600}>
                    Sign In
                    <Text fontSize={"10px"} fontWeight={400}>
                      for FREE Shipping 🚚
                    </Text>
                  </Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <Flex>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"50px"}
                    />
                  </Box>
                  <Text fontSize={"14px"} fontWeight={700} margin={"20px"}>
                    Good morning, Beautiful. ☀️{" "}
                    <Text fontSize={"10px"} fontWeight={400} color={"grey"}>
                      Sign in for{" "}
                      <span fontWeight={600}>Free Standard shipping</span> on
                      all orders.
                    </Text>
                  </Text>
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  justifyContent={"center"}
                  gap={"12px"}
                  paddingTop={"8px"}
                  paddingBottom={"14px"}
                >
                  <Box width={"50%"}>
                    <Login />
                  </Box>
                  <Signup />
                </Flex>
                <Divider color={"grey"} />
                <Flex>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/beauty-traits.svg"
                      width={"50%"}
                    />
                  </Box>
                  <Text _hover={{ textDecoration: "underline" }}>
                    Beauty Preferences
                    <Text fontSize={"11px"} fontWeight={400} color={"grey"}>
                      Complete to see your personalized recoomendations
                    </Text>
                  </Text>
                </Flex>
                <Divider color={"grey"} />
                <Flex>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    color={"rgb(0, 0, 0)"}
                  >
                    Beauty Insider Summary
                    <Box>
                      <Image
                        src="https://www.sephora.com/img/ufe/bi/logo-insider.svg"
                        width={"50%"}
                      />
                    </Box>
                    <Text fontSize={"10px"} fontWeight={400}>
                      View activity, savings, benefits
                    </Text>
                  </Text>
                </Flex>
                <Divider color={"grey"} />
                <Flex>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    color={"rgb(0, 0, 0)"}
                  >
                    Rewards Bazaar
                    <span>Points</span>
                    <Text fontSize={"10px"} fontWeight={400}>
                      Redeem items, sample, more
                    </Text>
                  </Text>
                </Flex>
                <Divider color={"grey"} />
                <Flex>
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    color={"rgb(0, 0, 0)"}
                  >
                    Beauty Insider Challenges
                    <Box>
                      <Image
                        src="https://www.sephora.com/img/ufe/bi/logo-insider.svg"
                        width={"50%"}
                      />
                    </Box>
                    <Text fontSize={"10px"} fontWeight={400}>
                      View activity, savings, benefits
                    </Text>
                  </Text>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Flex>
            <Box>
              <svg
                viewBox="0 0 24 24"
                data-at="love_icon_large"
                aria-hidden="true"
                class="css-psp8z9 eanm77i0"
                data-comp="Icon StyledComponent "
              >
                <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path>
              </svg>
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button>
                <Link to={"/cart"}>
                  <Flex fontSize={"3xl"}>
                    <PiBasketLight />
                  </Flex>
                </Link>
              </Button>
              <PopoverContent>
                <PopoverHeader fontWeight={700} fontSize={"14px"}>
                  Basket
                </PopoverHeader>
                <Divider color={"grey"} />
                <PopoverBody>
                  <SimpleGrid>
                    <Flex>
                      <Box>
                        <Image
                          src="https://www.sephora.com/img/ufe/icons/rewards-bazaar.svg"
                          width={"100%"}
                        />
                      </Box>
                      <Text fontSize={"12px"} fontWeight={400}>
                        See samples, rewards, and promos in basket.
                      </Text>
                    </Flex>
                    <Divider />
                    <Flex gap={"10px"} alignItems={"center"}>
                      <Box w={"30px"}>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="css-ooetfa eanm77i0"
                          data-comp="Icon StyledComponent "
                        >
                          <path d="M16.122 4a.46.46 0 0 1 .462.458v2.446h3.212a.46.46 0 0 1 .371.186l3.744 5.069c.058.078.09.173.09.271v5.113a.46.46 0 0 1-.461.457l-2.576.001a3.5 3.5 0 0 1-6.92.053H8.956A3.5 3.5 0 0 1 2.036 18L1.46 18a.46.46 0 0 1-.46-.457V12H.393C.177 12 0 11.774 0 11.5s.177-.5.393-.5H1v-1H.348C.156 10 0 9.774 0 9.5S.156 9 .348 9H1V8H.417C.187 8 0 7.774 0 7.5S.188 7 .417 7H1v-.272a2.74 2.74 0 0 1 2.58-2.723L3.747 4ZM5.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm12 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm-12 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm10.16-9.637V4.915H3.747a1.82 1.82 0 0 0-1.824 1.813V7h3.66c.23 0 .417.226.417.5s-.188.5-.417.5h-3.66v1h2.729c.192 0 .348.226.348.5s-.156.5-.348.5H1.923v1h1.684c.216 0 .393.226.393.5s-.177.5-.393.5H1.923v5.085h.101a3.5 3.5 0 0 1 6.956.035h5.04a3.5 3.5 0 0 1 6.956-.035h2.1V12.58l-3.514-4.761H16.12a.46.46 0 0 1-.46-.456ZM18.674 9c.129 0 .25.07.325.187l1.973 3.12c.085.134.095.31.028.455a.393.393 0 0 1-.352.238h-4.207c-.219 0-.397-.197-.397-.44V9.44c0-.243.178-.44.397-.44h2.233Zm-.206.88h-1.631v2.24h3.048l-1.417-2.24ZM9.925 7c.294 0 .535.242.535.536a.538.538 0 0 1-.535.535l-1.39-.001A.537.537 0 0 1 8 7.537C8 7.242 8.24 7 8.535 7h1.39Z"></path>
                        </svg>
                        w={"100%"}
                      </Box>
                      <Text fontWeight={400} fontSize={"11px"}>
                        Beauty Insiders enjoy{" "}
                        <span style={{ fontWeight: "600" }}>
                          FREE standard shipping
                        </span>{" "}
                        on all orders.
                      </Text>
                    </Flex>
                    <Divider />

                    <Flex gap={"10px"} alignItems={"start"}>
                      <Box w={"30px"}>
                        <Img
                          src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                          w={"100%"}
                        />
                      </Box>
                      <Text fontSize={"16px"}>
                        The Sephora Credit Card Program
                        <Text fontWeight={400} fontSize={"11px"}>
                          Save 25% on this order when you open and use either
                          Sephora Credit Card today
                        </Text>
                      </Text>
                    </Flex>
                    <Divider />
                    <Link to={"/cart"}>
                      <Button
                        bgColor={"white"}
                        color={"black"}
                        border={"1px solid black"}
                        w={"2x1"}
                        borderRadius={"20px"}
                      >
                        SEE DETAILS
                      </Button>
                      <Text fontSize={"11px"} fontWeight={400}>
                        *Subject to credit approval.Exclusions apply
                      </Text>
                    </Link>
                  </SimpleGrid>
                </PopoverBody>
              </PopoverContent>
            </PopoverTrigger>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <HamburgerIcon
                display={["block", "block", "block", "none"]}
                cursor={"pointer"}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader
                fontWeight={700}
                fontSize={"14px"}
                paddingTop={"10px"}
                paddingBottom={"10px"}
              >
                Categories
              </PopoverHeader>
              <PopoverBody>
                <SimpleGrid spacing={"12px"}>
                  <TextCreate text={"New"} category={"New"} />
                  <TextCreate text={"Brands"} category={"Brands"} />
                  <TextCreate text={"Makeup"} category={"Makeup"} />
                  <TextCreate text={"Skincare"} category={"Makeup"} />
                  <TextCreate text={"Hair"} category={"Hair"} />
                  <TextCreate text={"Fragrance"} category={"Fragrance"} />
                  <TextCreate
                    text={"Tools & Brushes"}
                    category={"Tools & Brushes"}
                  />
                  <TextCreate text={"Bath & Body"} category={"Bath & Body"} />
                  <TextCreate text={"Mini Size"} category={"Mini Size"} />
                  <TextCreate
                    text={"Gifts & Gift Cards"}
                    category={"Gifts & Gift Cards"}
                  />
                  <TextCreate
                    text={"Beauty Under $20"}
                    category={"Beauty Under $20"}
                  />
                  <TextCreate text={"Sales & Offers"} category={"Hair"} />
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Navbar1;
