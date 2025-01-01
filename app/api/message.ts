const baseUrl = process.env.NEXT_PUBLIC_MESSAGE_API_URL as string;
import ClientRequest from '../utils/request';
const http = new ClientRequest({ baseUrl });
interface MessageResponse {
  traceId: string;
  code: number;
  msg: string;
  data: string;
}
// 发送评论
export function submitComment(content: string) {
  return http.post<MessageResponse>('/v1/message_board/publish', {
    traceId: `${Date.now()}`,
    msgInfo: {
      content,
      bizId: 'mindtopia_offical',
      createAtSec: parseInt(`${Date.now() / 1000}`, 10),
    },
  });
}
