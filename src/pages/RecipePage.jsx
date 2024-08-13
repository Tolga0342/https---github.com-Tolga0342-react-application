import { Text, Image, Button } from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  const afgerondFat = Math.round(recipe.totalNutrients.FAT.quantity);
  const afgerondProtein = Math.round(recipe.totalNutrients.PROCNT.quantity);
  const afgerondKcal = Math.round(recipe.totalNutrients.ENERC_KCAL.quantity);
  const afgerondChocDf = Math.round(recipe.totalNutrients.CHOCDF.quantity);
  const afgerondChole = Math.round(recipe.totalNutrients.CHOLE.quantity);
  const afgerondNa = Math.round(recipe.totalNutrients.NA.quantity);

  return (
    <>
      <Text> {recipe.label}</Text>
      <Image src={recipe.image} alt="Image" height="75px" width="75px" />
      <Text>{recipe.dishType}</Text>
      <Text>{recipe.mealType}</Text>
      <Text>{recipe.totalTime}</Text>
      <Text>{recipe.dietLabels}</Text>
      <Text>{recipe.healthLabels}</Text>
      <Text>{recipe.cautions}</Text>
      <Text>{recipe.ingredientLines}</Text>
      <Text>{recipe.yield}</Text>
      <Text>{recipe.totalNutrients.ENERC_KCAL.label}</Text>
      <Text>{("KCAL:", afgerondKcal)}</Text>
      <Text>{recipe.totalNutrients.ENERC_KCAL.unit}</Text>
      <Text>{recipe.totalNutrients.PROCNT.label}</Text>
      <Text>{("PROTEIN:", afgerondProtein)}</Text>
      <Text>{recipe.totalNutrients.PROCNT.unit}</Text>
      <Text>{recipe.totalNutrients.FAT.label}</Text>
      <Text>{("FAT:", afgerondFat)}</Text>
      <Text>{recipe.totalNutrients.FAT.unit}</Text>
      <Text>{recipe.totalNutrients.CHOCDF.label}</Text>
      <Text>{("CHOCDF:", afgerondChocDf)}</Text>
      <Text>{recipe.totalNutrients.CHOCDF.unit}</Text>
      <Text>{recipe.totalNutrients.CHOLE.label}</Text>
      <Text>{("CHOLE:", afgerondChole)}</Text>
      <Text>{recipe.totalNutrients.CHOLE.unit}</Text>
      <Text>{recipe.totalNutrients.NA.label}</Text>
      <Text>{("NA:", afgerondNa)}</Text>
      <Text>{recipe.totalNutrients.NA.unit}</Text>
      <Button onClick={() => clickFn()} variant="ghost">
        change selection
      </Button>
    </>
  );
};
