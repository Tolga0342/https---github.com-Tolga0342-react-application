import {
  Center,
  Heading,
  Image,
  Text,
  Badge,
  Wrap,
  Card,
  Stack,
  Flex,
  CardBody,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  const filteredHealthLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );

  return (
    <Center onClick={() => onClick(recipe)}>
      <Card
        borderRadius="xl"
        w="17em"
        h="29rem"
        align="center"
        backgroundColor="white"
      >
        <Image
          src={recipe.image}
          alt="Image"
          height="12em"
          width="full"
          borderTopRadius="xl"
          mb={1}
        />
        <CardBody>
          <Stack alignItems="center">
            <Text color="gray.500" mb={1}>
              {recipe.mealType}
            </Text>
            <Heading size="sd" mb={1} textAlign="center">
              {recipe.label}
            </Heading>
            <Wrap mb={1}>
              {filteredHealthLabels.map((label) => (
                <Badge colorScheme="purple" key={label}>
                  {label}
                </Badge>
              ))}
            </Wrap>
            <Wrap mb={1}>
              {recipe.dietLabels.map((label) => (
                <Badge colorScheme="green" key={label}>
                  {label}
                </Badge>
              ))}
            </Wrap>
            <Text>
              Dish:{" "}
              <Text mb={1} as="kbd">
                {recipe.dishType}
              </Text>
            </Text>
            <Flex
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
              wrap="wrap"
            >
              <Text mb={1}> Cautions: </Text>
              <Wrap>
                {recipe.cautions.map((caution) => (
                  <Badge colorScheme="red" key={caution}>
                    {" "}
                    {caution}{" "}
                  </Badge>
                ))}
              </Wrap>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
