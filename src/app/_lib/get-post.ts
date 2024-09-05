import { fetcher, POST_API_URL } from "@/lib";
import { Post } from "@/types";

export async function getPost(postId: number): Promise<Post | undefined> {
	try {
		const result = await fetcher<Post, null>(`${POST_API_URL}/posts/${postId}`);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
