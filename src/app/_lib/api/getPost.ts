import { fetcher } from "@/lib/utils";
import { POST_API_URL } from "@/lib/constants";
import { Post } from "@/types";

export async function getPost(postId: number): Promise<Post | undefined> {
	try {
		const result = await fetcher<Post, null>(`${POST_API_URL}/posts/${postId}`);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
