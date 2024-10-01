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
export declare function fetcher<TResponse, TBody>(url: string, { method, headers, body, params }?: FetchOptions<TBody>): Promise<FetchResponse<TResponse>>;
export {};
