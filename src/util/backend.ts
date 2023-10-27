import { BACKEND_URL } from './constants';
import { IEndpointTypes, IHTTPMessage } from './types';

async function makeBackendRequest(
  endpoint: string,
  method: "get" | "post",
  jwt: string | null,
  body: Object | null,
): Promise<Response> {
  const headers: {
    "Content-Type"?: string;
    Bearer?: string;
  } = new Object();

  if (jwt !== null) headers["Bearer"] = jwt;
  if (body !== null) headers["Content-Type"] = "application/json";

  switch (method) {
    case "get":
      return await fetch(`${BACKEND_URL}/${endpoint}/`, {
        method: "get",
        headers,
      });
    case "post":
      return await fetch(`${BACKEND_URL}/${endpoint}/`, {
        method: "post",
        headers,
        body: JSON.stringify(body ?? {}),
      });
  }
}

interface IOkResponse<T> {
	is_ok: true;
	status_code: 200;
	response: T;
}

interface IErrorResponse {
	is_ok: false;
	status_code: number;
	response: IHTTPMessage;
}

type BackendResponse<T> = IOkResponse<T> | IErrorResponse;
export async function makeRequest
<E extends keyof IEndpointTypes>
(endpoint: E, method: 'get' | 'post', params: IEndpointTypes[E]['request'] | null = null, jwt: string | null = null):
Promise<BackendResponse<IEndpointTypes[E]['response']>> {
	const response = await makeBackendRequest(
		endpoint,
		method,
		jwt,
		params,
	)

	try {
		if (response.ok) {
			return {
				is_ok: true,
				status_code: 200,
				response: await response.json()
			}
		}

		return {
			is_ok: false,
			status_code: response.status,
			response: await response.json()
		}
	}
	catch (e) {
		return {
			is_ok: false,
			status_code: response.status,
			response: {
				code: response.status,
				message: e as string
			}
		}
	}
}
