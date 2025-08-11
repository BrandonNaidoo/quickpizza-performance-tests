import http from 'k6/http';
import { baseUrl } from '../config/env.ts';

export class HttpClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(baseUrl: string, token?: string) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  public post<T = unknown>(path: string, body: T) {
    return http.post(`${baseUrl}${path}`, JSON.stringify(body), {
      headers: this.headers,
    });
  }

  public get<T = unknown>(path: string) {
    return http.get(`${baseUrl}${path}`, {
      headers: this.headers,
    });
  }  
}
