import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <>
          <RecipeListPage setRecipe={setSelectedRecipe} />
        </>
      )}
    </>
  );
};
