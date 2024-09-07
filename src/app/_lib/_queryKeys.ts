export const QUERY_KEYS = {
	POSTS: {
		LIST: ["posts"] as const,
		DETAILS: (postId: number) => ["post", postId] as const,
	},
	COMMENTS: {
		DETAILS: (postId: number) => ["comments", postId] as const,
	},
};
