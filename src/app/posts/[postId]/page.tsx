import dynamic from "next/dynamic";
import { Post } from "@/components";
import { getPost } from "@/lib";

const CommentComposer = dynamic(() => import("../../_components/CommentComposer/CommentComposer"));

export default async function PostId({ params }: { params: { postId: number } }) {
	const post = await getPost(params.postId);

	if (!post) {
		throw new Error(`${params.postId}`);
	}

	return (
		<div>
			<Post postId={params.postId} title={post.title} body={post.body} />
			<CommentComposer postId={params.postId} />
		</div>
	);
}
