import { fetcher, POST_API_URL } from "@/lib";
import { Comment, CommentBody } from "@/types";

export async function postComment(body: CommentBody): Promise<CommentBody | undefined> {
	try {
		const result = await fetcher<Comment, CommentBody>(`${POST_API_URL}/comments`, {
			method: "POST",
			body,
		});

		console.log(result);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
