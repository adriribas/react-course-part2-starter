import httpClient from './httpClient';

export default class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = () => {
    return httpClient.get<T[]>(this.endpoint).then(res => res.data);
  };

  post = (data: T) => {
    return httpClient.post<T>(this.endpoint, data).then(res => res.data);
  };
}
