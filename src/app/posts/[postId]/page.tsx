import dynamic from "next/dynamic";
import { Metadata } from "next";
import { Post } from "@/components";
import { getPost } from "@/lib";

const CommentComposer = dynamic(() => import("../../_components/CommentComposer/CommentComposer"));

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
