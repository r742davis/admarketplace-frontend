// import { Comment, CommentComposer } from "@/components";
import Link from "next/link";
import { getPost } from "@/lib";

export default async function Post({ params }: { params: { postId: number } }) {
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
			<h1>Post ID Page: {params.postId}</h1>
			<p>{post.id}</p>
			<p>{post.title}</p>
			<p>{post.body}</p>
		</div>
	);
}
