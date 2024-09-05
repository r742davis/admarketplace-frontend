import { Comment } from "@/components";
import { getComments } from "@/lib";
import styles from "./page.module.scss";

export default async function Comments({ searchParams }: { searchParams: { postId: number } }) {
	const comments = await getComments(searchParams.postId);

	return (
		<>
			<h1>Comments Pages: {searchParams?.postId ?? "No Comments - Please use Query Params"}</h1>
			<ul className={styles["list"]}>{comments && comments.map(c => <Comment key={c.id} {...c} />)}</ul>
		</>
	);
}
