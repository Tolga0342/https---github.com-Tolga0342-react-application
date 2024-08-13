import {
  Center,
  Heading,
  Image,
  Text,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  const filteredHealthLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );

  return (
    <Center onClick={() => onClick(recipe)}>
      <Text>{recipe.label} </Text>
      <Image src={recipe.image} alt="Image" height="75px" width="75px" />
      <Text> {recipe.dietLabels} </Text>
      <Text> {recipe.cautions}</Text>
      <Text> {recipe.mealType}</Text>
      <Text> {recipe.dishType}</Text>
      {filteredHealthLabels.length > 0 && (
        <Text>Health Labels: {filteredHealthLabels.join(", ")}</Text>
      )}
    </Center>
  );
};
