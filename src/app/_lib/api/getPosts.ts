import { fetcher, POST_API_URL } from "@/lib";
import { Post } from "@/types";

export async function getPosts(): Promise<Array<Post> | undefined> {
	try {
		const result = await fetcher<Array<Post>, null>(`${POST_API_URL}/posts`);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
