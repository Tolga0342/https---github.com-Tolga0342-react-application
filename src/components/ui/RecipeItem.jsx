import { Center, Heading, Image } from "@chakra-ui/react";

export const RecipeItem = ({ x }) => {
  return (
    <Center>
      <Heading>{x.hits.recipe.label} </Heading>
      <Image>{x.hits.recipe.image} </Image>
    </Center>
  );
};
