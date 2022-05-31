import { Flex, Text, Heading, AspectRatio, Image } from "@chakra-ui/react";

import HomeContent from "../components/HomeContent";
import FoodsPage from "./FoodPage";

export default function HomePage() {
  return (
    <div>
      <HomeContent />
      <FoodsPage></FoodsPage>
    </div>
  );
}
