type FetchOptions<TBody> = {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	headers?: Record<string, string>;
	body?: TBody;
	params?: Record<string, string | number | boolean>;
};

type FetchResponse<T> = {
	data: T;
	status: number;
	statusText: string;
};

export async function fetcher<TResponse, TBody>(
	url: string,
	{ method = "GET", headers = {}, body, params }: FetchOptions<TBody> = {}
): Promise<FetchResponse<TResponse>> {
	if (!url) throw new Error("Please pass a URL when using the custom fetcher");

	const controller = new AbortController();
	let queryString = "";

	const fetchOptions: RequestInit = {
		method,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		signal: controller.signal,
	};

	if (!!params) {
		queryString = Object.entries(params)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
			.join("&");
	}
	if (body && method !== "GET") fetchOptions.body = JSON.stringify(body);

	const response = await fetch(url + queryString, fetchOptions);

	if (!response.ok) {
		const errorData = await response.json().catch(() => null);
		throw new Error(
			`Error: ${response.status} - ${response.statusText} ${errorData ? JSON.stringify(errorData) : ""}`
		);
	}

	const data: TResponse = await response.json();
	return {
		data,
		status: response.status,
		statusText: response.statusText,
	};
}
