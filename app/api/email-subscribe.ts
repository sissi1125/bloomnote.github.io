const baseUrl = process.env.NEXT_PUBLIC_MINDTOPIA_API_URL;
import ClientRequest from '../utils/request';
const http = new ClientRequest({ baseUrl });
interface Response {
  traceId: string;
  code: number;
  msg: string;
}
export function subscribeEmail(email: string) {
  return http.request<Response>('v1/email/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emailAddr: email }),
  });
}
