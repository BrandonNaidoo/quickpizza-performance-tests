import { check } from 'k6';
import { login } from '../framework/login.ts'
import { HttpClient } from '../framework/httpClient.ts';
import { thresholds } from '../config/thresholds.ts';
import { scenarios } from '../config/scenarios.ts';
import { baseUrl } from '../config/env.ts';
import { buildPizzaRequest } from '../builders/pizzaRequestBuilder.ts';
import { paths } from '../config/paths.ts'; 

export const options = {
  scenarios,
  thresholds
};

export function pizzaPostRequest() {
  const token = login();
  const client = new HttpClient(baseUrl, token);

  check(token, {
    'token is valid': (t) => typeof t === 'string' && t.length > 0,
  });

  const payload = buildPizzaRequest();

  const res = client.post(paths.pizza, payload);

  check(res, {
    'pizza created (200)': (r) => r.status === 200,
    'pizza has id': (r) => r.json('pizza.id') !== undefined,
  });
}
