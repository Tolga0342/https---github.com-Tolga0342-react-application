import { Center, Grid } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";
import { RecipeItem } from "../components/ui/RecipeItem";
import { TextInput } from "../components/ui/TextInput";
import { RecipesList } from "../components/RecipesList";

export const RecipeListPage = ({ setRecipe }) => {
  const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits);

  const handleChange = (event) => {
    const matchedRecepts = data.hits.filter((recept) => {
      return recept.label
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log("matchedRecepts:", matchedRecepts);
  };

  return (
    <>
      <TextInput placeholder="tekst" onChange={handleChange} />

      <RecipesList setRecipe={setRecipe} recipes={selectedRecipeList} />
    </>
  );
};
