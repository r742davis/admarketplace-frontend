import { fetcher, POST_API_URL } from "@richie/lib";

export async function postComment<T extends TBody, TBody>(body: TBody): Promise<TBody | undefined> {
	try {
		const result = await fetcher<T, TBody>(`${POST_API_URL}/comments`, {
			method: "POST",
			body,
		});

		console.log(result);

		return result.data;
	} catch (error) {
		console.error(error);
	}
}
