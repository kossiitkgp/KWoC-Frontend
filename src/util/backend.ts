import { BACKEND_URL } from "./constants";

export interface IErrorResponse {
  code: number;
  message: string;
}

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

export type UserType = 'mentor' | 'student';

interface IUnauthEndpointTypes {
	'/oauth/': {
		request: {
			code: string,
			type: UserType
		},
		response: {
			email: string;
			is_new_user: boolean;
			jwt: string;
			name: string;
			type: UserType;
			username: string;
		}
	}
}

export async function makePostRequest
<E extends keyof IUnauthEndpointTypes>
(endpoint: E, params: IUnauthEndpointTypes[E]['request']):
Promise<IUnauthEndpointTypes[E]['response'] | IErrorResponse> {
	const response = await makeBackendRequest(
		endpoint,
		'post',
		null,
		params,
	)

	return await response.json() as IUnauthEndpointTypes[E]['response'] | IErrorResponse;
}

export async function makeGetRequest
<E extends keyof IUnauthEndpointTypes>
(endpoint: E):
Promise<IUnauthEndpointTypes[E]['response'] | IErrorResponse> {
	const response = await makeBackendRequest(
		endpoint,
		'get',
		null,
		null
	)

	return await response.json() as IUnauthEndpointTypes[E]['response'] | IErrorResponse;
}
