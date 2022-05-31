import {
  Center,
  Box,
  Image,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export default function FoodCard({ food }) {
  const navigate = useNavigate();
  function getDetail(id) {
    console.log(id);
    navigate(`/foods/${id}`);
  }

  return (
    <Flex gap={"20px"} justifyContent={"start "}>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${food.imgUrl})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              onClick={(e) => {
                getDetail(food.id);
              }}
              cursor={"pointer"}
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={food.imgUrl}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {food.Category.name}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {food.name}
            </Heading>
            <Text fontWeight={"medium"} fontSize={"s"}>
              {food.description}
            </Text>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                {food.price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Flex>
  );
}
