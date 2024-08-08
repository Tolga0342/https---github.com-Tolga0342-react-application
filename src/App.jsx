import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <>{userRecipe ? <RecipePage recipe={userRecipe} /> : <RecipeListPage />}</>
  );
};
