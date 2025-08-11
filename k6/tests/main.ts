import { scenarios } from '../config/scenarios.ts'; 
import { thresholds } from '../config/thresholds.ts';
import { pizzaPostRequest } from './pizzaPost.ts';
import { ratingsRequest } from './ratingsGet.ts';

export const options = {
  scenarios,
  thresholds,
};

export function quickPizzaTest() {
  pizzaPostRequest();
  ratingsRequest();
}