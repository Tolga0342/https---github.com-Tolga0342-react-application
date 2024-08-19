import { Heading, Box } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";
import { RecipesList } from "../components/RecipesList";

export const RecipeListPage = ({ setRecipe }) => {
  const greeting = "Welcome to our app!";
  const [selectedRecipeList, setSelectedRecipeList] = useState(data.hits);

  const handleChange = (event) => {
    const matchedRecepts = data.hits.filter(({ recipe }) => {
      return recipe.label
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setSelectedRecipeList(matchedRecepts);
  };

  return (
    <Box backgroundColor="blue.100">
      <Heading
        padding={15}
        mb={5}
        textAlign="center"
        backgroundColor="blue.100"
      >
        {greeting}
      </Heading>
      <TextInput placeholder="fill in your recipe" onChange={handleChange} />

      <RecipesList setRecipe={setRecipe} recipes={selectedRecipeList} />
    </Box>
  );
};
