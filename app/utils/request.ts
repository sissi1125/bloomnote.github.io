interface RequestOptions extends RequestInit {
  params?: Record<string, any>;
}

interface ClientRequestInitOptions {
  baseUrl?: string;
  isCredentials?: boolean;
}
interface ClientRequestInterface {
  request<T>(url: string, options: RequestOptions): Promise<T>;
  get<T>(url: string, params: Record<string, string>): Promise<T>;
  post<T>(url: string, data: unknown): Promise<T>;
}

class ClientRequest implements ClientRequestInterface {
  public baseUrl: string;
  public credentials: RequestCredentials = 'same-origin';
  constructor({ baseUrl = '', isCredentials }: ClientRequestInitOptions = {}) {
    this.baseUrl = baseUrl;
    if (isCredentials) {
      this.credentials = isSameOrigin(baseUrl, window.location.origin) ? 'same-origin' : 'include';
    }
  }
  public async request<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const { params, ...rest } = options;
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      url = `${this.baseUrl}${url}?${queryString}`;
    } else {
      url = `${this.baseUrl}${url}`;
    }
    try {
      const response = await fetch(url, {
        credentials: this.credentials,
        ...rest,
      });
      if (!response.ok) {
        throw new Error(`http error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('fetch error:', error);
      throw error;
    }
  }
  public get<T>(url: string, params?: Record<string, string>): Promise<T> {
    return this.request<T>(url, { method: 'GET', params });
  }
  public post<T>(url: string, data?: unknown): Promise<T> {
    return this.request<T>(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}

function isSameOrigin(url1: string, url2: string): boolean {
  const url1Object = new URL(url1);
  const url2Object = new URL(url2);
  const condition = [
    url1Object.protocol === url2Object.protocol,
    url1Object.hostname === url2Object.hostname,
    url1Object.port === url2Object.port,
  ];
  return condition.every(Boolean);
}

export default ClientRequest;
