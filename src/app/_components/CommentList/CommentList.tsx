"use client";

import { useQuery } from "@tanstack/react-query";
import { Comment } from "@/components";
import { QUERY_KEYS } from "@/lib";
import { Comment as CommentT } from "@/types";

type CommentsListProps = {
	comments: Array<CommentT> | undefined;
	postId: number;
};

export default function CommentsList({ comments = [], postId }: CommentsListProps) {
	const { data } = useQuery({
		queryKey: QUERY_KEYS.COMMENTS.DETAILS(Number(postId)),
		initialData: comments,
		staleTime: Infinity,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: false,
		select: data => {
			return data;
		},
	});

	return (
		<ul>
			{data.map((c, index) => (
				<Comment key={`${c.id} + ${index}`} {...c} />
			))}
		</ul>
	);
}
