import { fetcher, POST_API_URL } from "@richie/lib";

export type Post = { userId: number; id: number; title: string; body: string };

export async function getPost(postId: number): Promise<Post | undefined> {
	try {
		const result = await fetcher<Post, null>(`${POST_API_URL}/posts/${postId}`);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
