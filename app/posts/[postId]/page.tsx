import { Metadata } from "next";
import { CommentComposer, Post } from "@richie/components";
import { getPost } from "@richie/lib";

type PostIdProps = { params: { postId: number } };

export const generateMetadata = ({ params }: PostIdProps): Metadata => {
	return {
		title: `Post ${params.postId}`,
		description: `Contains the Post #${params.postId}.`,
	};
};

export default async function PostId({ params }: PostIdProps) {
	const post = await getPost(params.postId);

	if (!post) {
		throw new Error(`${params.postId}`);
	}

	return (
		<>
			<Post postId={params.postId} title={post.title} body={post.body} />
			<CommentComposer postId={params.postId} />
		</>
	);
}
