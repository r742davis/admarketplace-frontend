import { POST_API_URL } from "./_constants";
import fetcher from "./_fetcher";

export async function getPosts() {
	try {
		const result = await fetcher<Array<{ userId: string; id: number; title: string; body: string }>, null>(
			`${POST_API_URL}/posts`
		);

		return result;
	} catch (error) {
		console.error(error);
	}
}
