import { PizzaRequest } from '../models/PizzaRequest';
import {
  randomIntBetween,
  randomItem
} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';


export function buildPizzaRequest(overrides: Partial<PizzaRequest> = {}): PizzaRequest {
  const defaultRequest: PizzaRequest = {
    maxCaloriesPerSlice: randomIntBetween(300, 1000),
    mustBeVegetarian: randomItem([true,false]),
    excludedIngredients: [],
    excludedTools: [],
    maxNumberOfToppings: randomIntBetween(3,10) ,
    minNumberOfToppings: randomIntBetween(1,3),
    customName: '',
  };

  return { ...defaultRequest, ...overrides };
}