import { getComments, capitalize } from "@richie/lib";
import { Comment } from "@richie/components/Comment/Comment";
import { CommentList } from "@richie/components";
import styles from "./Post.module.scss";

type PostProps = {
	postId: number;
	title: string;
	body: string;
};

export default async function Post({ postId, title, body }: PostProps) {
	const comments = (await getComments(postId)) as Comment[] | undefined;

	return (
		<div className={styles["container"]}>
			<h1 className={styles["title"]}>
				Post #{postId}: {capitalize(title)}
			</h1>
			<p className={styles["body"]}>{body}</p>
			<CommentList comments={comments} postId={postId} />
		</div>
	);
}
