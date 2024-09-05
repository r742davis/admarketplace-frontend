import { fetcher, POST_API_URL } from "@/lib";
import { Comment } from "@/types";

export async function getComments(postId: number): Promise<Array<Comment> | undefined> {
	try {
		const result = await fetcher<Array<Comment>, null>(`${POST_API_URL}/posts/${postId}/comments`);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
