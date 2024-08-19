import { Center } from "@chakra-ui/react";
import { RecipeItem } from "./ui/RecipeItem";

export const RecipesList = ({ setRecipe, recipes }) => {
  return (
    <Center
      mt={4}
      h="100%"
      w="100%"
      flexDir={["column", "row"]}
      flexWrap="wrap"
      gap={10}
      backgroundColor="blue.100"
    >
      {recipes.map(({ recipe }) => (
        <RecipeItem
          key={recipe.label}
          recipe={recipe}
          onClick={setRecipe}
          backgroundColor="blue.100"
        />
      ))}
    </Center>
  );
};
