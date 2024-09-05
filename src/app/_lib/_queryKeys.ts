export const QUERY_KEYS = {
	POSTS: {
		LIST: ["posts"] as const,
		DETAILS: (postId: number) => ["post", postId] as const,
	},
};
