import { Flex, Text, Heading, AspectRatio, Image } from "@chakra-ui/react";
export default function HomeContent() {
  return (
    <div>
      <Flex pt={8} alignItems={"center"} justifyContent={"center"}>
        <AspectRatio maxW="400px" flex={"1 1 auto"} ratio={16 / 9}>
          <Image
            src="https://media.self.com/photos/622912847b959736301bfb91/2:1/w_2119,h_1059,c_limit/GettyImages-1301412050.jpg"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
      </Flex>
      <Flex
        flexDirection={"column"}
        py={16}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as="h1" size="2xl">
          Time To refill you stomach with foods
        </Heading>
      </Flex>
    </div>
  );
}
