"use client";

import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Label } from "@radix-ui/react-label";
import { Input, Textarea } from "@/components";
import { postComment, QUERY_KEYS } from "@/lib";
import styles from "./CommentComposer.module.scss";
import { CommentBody } from "@/types";

export default function CommentComposer({ postId }: { postId: number }) {
	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const commentRef = useRef<HTMLTextAreaElement | null>(null);
	const queryClient = useQueryClient();

	// Looading state
	// Disable inputs during request
	const { isError, isSuccess, error, mutate } = useMutation({
		mutationFn: async (newComment: CommentBody) => {
			return await postComment(newComment);
		},
		onSuccess: data => {
			const oldComments: Array<CommentBody> | undefined = queryClient.getQueryData(
				QUERY_KEYS.COMMENTS.DETAILS(Number(postId))
			);

			queryClient.invalidateQueries({ queryKey: QUERY_KEYS.COMMENTS.DETAILS(Number(postId)) });
			queryClient.setQueryData(QUERY_KEYS.COMMENTS.DETAILS(Number(postId)), () => [...(oldComments ?? []), data]);
		},
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (nameRef.current && emailRef.current && commentRef.current) {
			// Email Validation
			// Comment validation
			// Validate onBlur
			const formData: CommentBody = {
				postId,
				name: nameRef.current.value,
				email: emailRef.current.value,
				body: commentRef.current.value,
			};

			mutate(formData);
		}
	};

	if (isError) return <div>An error occurred: {error.message}</div>;

	return (
		<form className={styles["container"]} onSubmit={handleSubmit}>
			{isSuccess && <h2>Submitted!</h2>}
			<div className={styles["input-container"]}>
				<Label htmlFor='name'>Name</Label>
				<Input className={styles["input"]} type='text' name='name' placeholder='Name' ref={nameRef} />

				<Label htmlFor='email'>Email</Label>
				<Input className={styles["input"]} type='text' name='email' placeholder='Email' ref={emailRef} />

				<Label htmlFor='comment'>Comment</Label>
				<Textarea id='comment' name='comment' placeholder='Your comment' ref={commentRef} />
			</div>
			<button type='submit' className={styles["button"]}>
				Post
			</button>
		</form>
	);
}
