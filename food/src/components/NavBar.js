import { Flex, Container, Stack, Link, Box, Image } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Flex py={4} px={2} borderBottom={1} borderStyle={"solid"}>
      <Container>
        <Stack direction={"row"} spacing={4}>
          <Box>
            <Link
              as={ReachLink}
              to="/"
              p={2}
              href={"#"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Home
            </Link>
          </Box>
          <Box>
            <Link
              as={ReachLink}
              to="/foods"
              p={2}
              href={"#"}
              fontSize={"2xl"}
              fontWeight={500}
            >
              Foods
            </Link>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}
