import { Comment, CommentComposer } from "@/components";

export default function PostID({ params }: { params: { postId: string } }) {
	return (
		<div>
			<h1>Post ID Page: {params.postId}</h1>
			<Comment />
			<CommentComposer />
		</div>
	);
}
