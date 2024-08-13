import { Center } from "@chakra-ui/react";
import { RecipeItem } from "./ui/RecipeItem";

export const RecipesList = ({ setRecipe, recipes }) => {
  console.log("recipes:", recipes);
  return (
    <Center mt={4} h="100%" w="100%" flexDir="row" flexWrap="wrap" gap={8}>
      {recipes.map(({ recipe }) => (
        <RecipeItem key={recipe.label} recipe={recipe} onClick={setRecipe} />
      ))}
    </Center>
  );
};
