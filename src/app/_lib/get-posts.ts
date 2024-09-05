import { fetcher, POST_API_URL } from "@/lib";
import { Post } from "@/types";

export async function getPosts() {
	try {
		const result = await fetcher<Array<Post>, null>(`${POST_API_URL}/posts`);

		return result;
	} catch (error) {
		console.error(error);
	}
}
