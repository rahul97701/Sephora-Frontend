    import { 
        Box, 
        Flex, 
        List, 
        ListItem } from "@chakra-ui/react";
    import { withTheme } from "@emotion/react";
    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    
    const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useDebounce(value);
    useEffect(() => {
        const handler = setTimeout(() => {
        setDebouncedValue(value);
        }, delay);
        return () => {
        clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
    };

    function SearchInput() {
    const [searchProducts, setSearchProducts] = useState("");
    const [isTrue, setIsTrue] = useState(false);
    const [cross, setCross] = useState(false);
    const [data, setData] = useState([]);
    const handleNavigation = useNavigate();
    const debouncedInputValue = useDebounce(searchProducts, 500);

    const fetchingSearchedData = async () => {
        try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/product?search=${searchProducts}`
        );
        setData(response.data.data);
        } catch (error) {
        console.error(error);
        }
    };

    const handleSearchNavigation = (id) => {
        handleNavigation(`/products/${id}`);
        setIsTrue(false);
        setCross(true);
    };

    useEffect(() => {
        if (debouncedInputValue && searchProducts?.length) {
        fetchingSearchedData();
        }

        if (searchProducts === "") {
        setIsTrue(false);
        }
    }, [debouncedInputValue]);

    return (
        <Box>
        <Flex
            bg={"white"}
            w={"full"}
            p={1}
            alignItems={"center"}
            rounded={"3xl"}
            className={"double-width"}
        >
            <Input
            type={"text"}
            value={searchProducts}
            OnChange={(e) => {
                setSearchProducts(e.target.value);
                setIsTrue(true);
                setCross(true);
            }}
            placeholder="Search"
            fontSize={550}
            borderRadius={"20px"}
            />
        </Flex>
        {data.length && isTrue ? (
            <List
            zIndex={10}
            position={"absolute"}
            width={["80%", "600px"]}
            maxHeight={"80"}
            rounded={"3xl"}
            marginLeft={5}
            background={"white"}
            overflow={"auto"}
            marginTop={2}
            >
            {data?.length ? (
                data?.map((result) => (
                <ListItem
                    padding={2}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    color={"black"}
                    cursor={"pointer"}
                    _hover={{ background: "grey.100" }}
                    key={result._id}
                    onClick={() => handleSearchNavigation(result._id)}
                >
                    {result.title}
                </ListItem>
                ))
            ) : (
                <ListItem>No Data Found</ListItem>
            )}
            </List>
        ) : (
            isTrue && (
            <Box
                zIndex={10}
                position={"absolute"}
                width={"700px"}
                maxHeight={"80"}
                rounded={"3xl"}
                marginLeft={5}
                color={"black"}
                padding={5}
                background={"white"}
                overflow={"auto"}
                marginTop={2}
            >
                No Data Found
            </Box>
            )
        )}
        </Box>
    );
}

    export default SearchInput;
