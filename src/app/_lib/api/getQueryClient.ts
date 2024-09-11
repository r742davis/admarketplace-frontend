import { QueryClient, defaultShouldDehydrateQuery, isServer } from "@tanstack/react-query";

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 1,
				gcTime: 1000 * 60 * 10,
				retry: 2,
				retryDelay: attempt => Math.min(1000 * 2 ** attempt, 30000), // Exponential Backoff˝
				refetchOnWindowFocus: false,
				refetchOnReconnect: true,
				refetchOnMount: false,
			},
			mutations: {
				retry: 1,
			},
			dehydrate: {
				shouldDehydrateQuery: query => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
	if (isServer) {
		return makeQueryClient();
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient();
		return browserQueryClient;
	}
}
