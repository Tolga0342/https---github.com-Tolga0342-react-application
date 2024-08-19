import {
  Box,
  Center,
  Text,
  Image,
  Button,
  Flex,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  SimpleGrid,
  Wrap,
  Badge,
  WrapItem,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  const afgerondFat = Math.round(recipe.totalNutrients.FAT.quantity);
  const afgerondProtein = Math.round(recipe.totalNutrients.PROCNT.quantity);
  const afgerondKcal = Math.round(recipe.totalNutrients.ENERC_KCAL.quantity);
  const afgerondChocDf = Math.round(recipe.totalNutrients.CHOCDF.quantity);
  const afgerondChole = Math.round(recipe.totalNutrients.CHOLE.quantity);
  const afgerondNa = Math.round(recipe.totalNutrients.NA.quantity);

  return (
    <Center
      h="100%"
      w="100%"
      flexDir="row"
      flexWrap="wrap"
      backgroundColor="blue.100"
    >
      <Card borderRadius="xl" w="2xl" h="fit-content" backgroundColor="white">
        <Image
          src={recipe.image}
          alt="Image"
          height={["15em", "25em"]}
          width="full"
          borderTopRadius="xl"
          mb={5}
        />
        <CardBody>
          <SimpleGrid columns={2}>
            <Box w="100%">
              <Text color="gray.500" mb={2}>
                {recipe.mealType}
              </Text>
              <Heading size="md" mb={5}>
                {recipe.label}
              </Heading>
              <Text>
                Dish type: <Text as="b">{recipe.dishType} </Text>
              </Text>
              <Text>
                Total cooking time: <Text as="b">{recipe.totalTime} min </Text>
              </Text>
              <Text mb={3}>
                Servings: <Text as="b">{recipe.yield}</Text>
              </Text>
              <Text fontSize="md" as="b">
                Ingredients:
              </Text>
              <Stack mt={1} alignItems="flex-start">
                {recipe.ingredientLines.map((ingredient) => (
                  <Text key="ingredient">{ingredient} </Text>
                ))}
              </Stack>
            </Box>

            <Box w={["60%", "100%"]}>
              <Text mb={1}>Health labels:</Text>
              <Wrap mb={5}>
                {recipe.healthLabels.map((label) => (
                  <Badge colorScheme="purple" key={label}>
                    {label}
                  </Badge>
                ))}
              </Wrap>
              <Text mb={1}> Diet:</Text>
              <Wrap mb={5}>
                {recipe.dietLabels.map((label) => (
                  <Badge colorScheme="green" key={label}>
                    {label}
                  </Badge>
                ))}
              </Wrap>
              <Text mb={1}>Cautions:</Text>
              <Wrap mb={5}>
                {recipe.cautions.map((label) => (
                  <Badge colorScheme="red" key={label}>
                    {label}
                  </Badge>
                ))}
              </Wrap>
              <Text mb={1} fontSize="md" as="b">
                Total nutrients:
              </Text>
              <Flex flexDir={["column", "row"]} wrap="wrap">
                <Box m={[1, 3]}>
                  <Text>
                    {afgerondKcal + " "}
                    {recipe.totalNutrients.ENERC_KCAL.unit}
                  </Text>
                  <Text> {recipe.totalNutrients.ENERC_KCAL.label}</Text>
                </Box>
                <Box m={[1, 3]}>
                  <Text>
                    {afgerondProtein + " "}
                    {recipe.totalNutrients.PROCNT.unit}
                  </Text>
                  <Text> {recipe.totalNutrients.PROCNT.label}</Text>
                </Box>
                <Box m={[1, 3]}>
                  <Text>
                    {afgerondFat + " "}
                    {recipe.totalNutrients.FAT.unit}
                  </Text>
                  <Text> {recipe.totalNutrients.FAT.label} </Text>
                </Box>
                <Box m={[1, 3]}>
                  <Text>
                    {afgerondChocDf + " "}
                    {recipe.totalNutrients.CHOCDF.unit}
                  </Text>
                  <Text> {recipe.totalNutrients.CHOCDF.label}</Text>
                </Box>
                <Box m={[1, 3]}>
                  <Text>
                    {afgerondChole + " "}
                    {recipe.totalNutrients.CHOLE.unit}
                  </Text>
                  <Text> {recipe.totalNutrients.CHOLE.label}</Text>
                </Box>
                <Box m={[1, 3]}>
                  <Text>
                    {afgerondNa + " "}
                    {recipe.totalNutrients.NA.unit}
                  </Text>
                  <Text> {recipe.totalNutrients.NA.label}</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
          <Flex
            mt={10}
            alignItems={["flex-start", "center"]}
            justifyContent={["flex-start", "center"]}
          >
            <CardFooter>
              <Button
                size={["md", "lg"]}
                colorScheme="green"
                variant="solid"
                onClick={() => clickFn()}
              >
                change selection
              </Button>
            </CardFooter>
          </Flex>
        </CardBody>
      </Card>
    </Center>
  );
};
