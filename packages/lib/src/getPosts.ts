import { fetcher, Post, POST_API_URL } from "@richie/lib";

export async function getPosts(): Promise<Array<Post> | undefined> {
	try {
		const result = await fetcher<Array<Post>, null>(`${POST_API_URL}/posts`);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
