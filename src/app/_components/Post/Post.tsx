import { Comment } from "@/components";
import { getComments } from "@/lib";
import styles from "./Post.module.scss";

type PostProps = {
	postId: number;
	title: string;
	body: string;
};

export default async function Post({ postId, title, body }: PostProps) {
	const comments = await getComments(postId);

	return (
		<div className='post'>
			<h1>{title}</h1>
			<p>{body}</p>
			<ul className={styles["comments-list"]}>{comments && comments.map(c => <Comment key={c.id} {...c} />)}</ul>
		</div>
	);
}
