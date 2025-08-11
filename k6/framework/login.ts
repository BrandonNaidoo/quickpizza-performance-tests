import { check } from 'k6';
import { HttpClient } from './httpClient.ts';
import { baseUrl, credentials } from '../config/env.ts';
import { paths } from '../config/paths.ts'; 


export function login(): string {
  const client = new HttpClient(baseUrl);

  const payload = {
    username: credentials.username,
    password: credentials.password,
  };

  const res = client.post(paths.login, payload);

  check(res, {
    'login status is 200': (r) => r.status === 200,
    'login returned token': (r) => r.json('token') !== undefined,
  });

  return res.json('token') as string;
}