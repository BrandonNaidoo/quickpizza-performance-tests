export interface PizzaRequest {
  maxCaloriesPerSlice: number;
  mustBeVegetarian: boolean;
  excludedIngredients: string[];
  excludedTools: string[];
  maxNumberOfToppings: number;
  minNumberOfToppings: number;
  customName: string;
}