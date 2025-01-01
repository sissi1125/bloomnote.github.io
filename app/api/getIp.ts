import ClientRequest from '../utils/request';
const http = new ClientRequest();
export default function getIp<T>(): Promise<T> {
  return http.get<T>('https://api.ipify.org', { format: 'json' });
}
