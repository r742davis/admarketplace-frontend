"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@richie/lib";
import { Comment as CommentComponent } from "@richie/components";
import styles from "./CommentList.module.scss";
import type { Comment } from "@richie/components/Comment/Comment";

type CommentsListProps = {
	comments: Array<Comment> | undefined;
	postId: number;
};

export default function CommentsList({ comments, postId }: CommentsListProps) {
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
			<ul>{data && data.map((c, index) => <CommentComponent key={`${c.id} + ${index}`} {...c} />)}</ul>
		</div>
	);
}
