import { Flex } from "@chakra-ui/react";
import FoodCard from "../components/FoodCard";

import { useEffect, useState } from "react";
import axios from "axios";
export default function FoodsPage() {
  const [foods, setFoods] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getFoods() {
      try {
        const { data } = await axios.get(`http://localhost:3000/foods`);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getFoods();
  }, []);

  return (
    <Flex mx={"15px"} gap={"20px"} justifyContent={"center "} flexWrap={"wrap"}>
      {/* {foods.map((food) => {
        return <FoodCard food={food} key={food.id} />;
      })} */}
    </Flex>
  );
}
