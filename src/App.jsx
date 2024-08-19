import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Box backgroundColor="blue.100" minHeight="100vh">
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage setRecipe={setSelectedRecipe} />
      )}
    </Box>
  );
};
