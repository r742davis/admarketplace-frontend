import Link from "next/link";
import { CommentComposer, Post } from "@/components";
import { getPost } from "@/lib";

export default async function PostId({ params }: { params: { postId: number } }) {
	const post = await getPost(params.postId);

	if (!post) {
		return (
			<>
				<h3>Invlide postId: {params.postId}</h3>
				<Link href='/'>Click here for the Home page</Link>
			</>
		);
	}

	return (
		<div>
			<Post postId={post.userId} title={post.title} body={post.body} />
			<CommentComposer />
		</div>
	);
}
