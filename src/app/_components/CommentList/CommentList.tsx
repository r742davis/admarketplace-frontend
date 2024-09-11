"use client";

import { useQuery } from "@tanstack/react-query";
import { Comment } from "@/components";
import { queryKeys } from "@/lib/constants";
import styles from "./CommentList.module.scss";
import { Comment as CommentT } from "@/types";

type CommentsListProps = {
	comments: Array<CommentT> | undefined;
	postId: number;
};

export default function CommentsList({ comments = [], postId }: CommentsListProps) {
	const { data } = useQuery({
		queryKey: queryKeys.COMMENTS.DETAILS(Number(postId)),
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
		<div className={styles["container"]}>
			<h5>Comments:</h5>
			<ul>
				{data.map((c, index) => (
					<Comment key={`${c.id} + ${index}`} {...c} />
				))}
			</ul>
		</div>
	);
}
