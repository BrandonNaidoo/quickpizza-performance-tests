import { check } from 'k6';
import { login } from '../framework/login.ts'
import { baseUrl } from '../config/env.ts';
import { thresholds } from '../config/thresholds.ts';
import { scenarios } from '../config/scenarios.ts';
import { HttpClient } from '../framework/httpClient.ts';
import { paths } from '../config/paths.ts';
import { RatingsResponse } from '../models/RatingsResponse.ts';

export const options = {
  scenarios,
  thresholds,
};

export function ratingsRequest() {
  const token = login();
  const client = new HttpClient(baseUrl, token);

    check(token, {
  'token is valid': (t) => typeof t === 'string' && t.length > 0,
  });

  const res = client.get(paths.ratings);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'has ratings array': (r) => {
      try {
        const json = r.json() as RatingsResponse | null;
        return json !== null && Array.isArray(json.ratings);
      } 
      catch {
        return false;
      }
    },
  });
}
