import { CommentComposer, Post } from "@/components";
import { getPost } from "@/lib";

export default async function PostId({ params }: { params: { postId: number } }) {
	const post = await getPost(params.postId);

	if (!post) {
		throw new Error(`${params.postId}`);
	}

	return (
		<div>
			<Post postId={post.userId} title={post.title} body={post.body} />
			<CommentComposer />
		</div>
	);
}
