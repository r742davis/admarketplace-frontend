import { Comment as CommentComponent } from "@richie/components";
import { getComments } from "@richie/lib";
import styles from "./page.module.scss";

export type Comment = { postId: number; id: number; name: string; email: string; body: string };

export default async function Comments({ searchParams }: { searchParams: { postId: number } }) {
	const comments = (await getComments(searchParams.postId)) as Comment[] | undefined;

	return (
		<>
			<h1>Comments Pages: {searchParams?.postId ?? "No Comments - Please use Query Params"}</h1>
			<ul className={styles["list"]}>{comments && comments.map(c => <CommentComponent key={c.id} {...c} />)}</ul>
		</>
	);
}
