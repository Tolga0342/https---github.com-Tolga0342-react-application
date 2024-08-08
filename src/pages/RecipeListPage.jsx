import { Center } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeItem } from "../components/ui/RecipeItem";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.healthLabels[1]);

  return (
    <Center h="100vh" flexDir="column">
      {data.map((recipe) => (
        <RecipeItem key={recipe.id} x={recipe} />
      ))}
    </Center>
  );
};
