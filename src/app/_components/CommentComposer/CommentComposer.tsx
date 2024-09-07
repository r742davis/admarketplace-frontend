"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Label } from "@radix-ui/react-label";
import { useFormValidation } from "@/hooks";
import { Input, Textarea } from "@/components";
import { emailFormat, postComment, QUERY_KEYS, required } from "@/lib";
import styles from "./CommentComposer.module.scss";
import { CommentBody } from "@/types";

type CommentForm = { name: string; email: string; comment: string };

const validators = {
	name: (v: string) => required(v),
	email: (v: string) => required(v) || emailFormat(v),
	comment: (v: string) => required(v),
};

export default function CommentComposer({ postId }: { postId: number }) {
	const queryClient = useQueryClient();
	const { errors, hasFormError, gatherFields, register, validateForm } = useFormValidation<CommentForm>({
		validators,
	});

	const {
		isError,
		isPending,
		isSuccess,
		error: mutErr,
		mutate,
	} = useMutation({
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
		if (!validateForm()) return;

		const { name, email, comment } = gatherFields();
		const formData: CommentBody = {
			postId,
			name: name,
			email: email,
			body: comment,
		};

		mutate(formData);
	};

	const showSuccess = isSuccess && !hasFormError;

	return (
		<form className={styles["container"]} onSubmit={handleSubmit}>
			{showSuccess && <h2>Submitted!</h2>}

			{isError && <div>An error occurred posting your comment: {mutErr.message}</div>}

			<div className={styles["input-container"]}>
				<Label htmlFor='name'>Name</Label>
				<Input
					required
					disabled={isPending}
					minLength={2}
					className={styles["input"]}
					type='text'
					name='name'
					placeholder='Name'
					ref={register("name")}
					error={errors["name"]}
				/>

				<Label htmlFor='email'>Email</Label>
				<Input
					required
					disabled={isPending}
					className={styles["input"]}
					type='text'
					name='email'
					placeholder='Email'
					ref={register("email")}
					error={errors["email"]}
				/>

				<Label htmlFor='comment'>Comment</Label>
				<Textarea
					required
					disabled={isPending}
					maxLength={500}
					id='comment'
					name='comment'
					placeholder='Your comment'
					ref={register("comment")}
					error={errors["comment"]}
				/>
			</div>
			<button type='submit' className={styles["button"]}>
				Post
			</button>
		</form>
	);
}
