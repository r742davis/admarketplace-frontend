"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { HydrationBoundary, dehydrate, useQuery } from "@tanstack/react-query";
import { Select } from "@richie/components";
import { getPosts, getQueryClient, queryKeys } from "@richie/lib";
import styles from "./page.module.scss";

export default function Home() {
	const { push } = useRouter();
	const queryClient = getQueryClient();

	const handleChange = useCallback(
		(value: string) => {
			push(`/posts/${value}`, { scroll: true });
		},
		[push]
	);

	const { data: posts } = useQuery({
		queryKey: queryKeys.POSTS.LIST,
		queryFn: getPosts,
		select: res => {
			if (!res) return [] as { id: string; value: string; label?: string }[];
			return res.map(({ id, title }) => ({
				id: id.toString(),
				value: id.toString(),
				label: `Post #${id}: ${title}`,
			}));
		},
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div className={styles["heading-container"]}>
				<h1 className={styles["heading"]}>
					Create.
					<br /> Post.
					<br /> Read!
					<br />
				</h1>
				<p className={styles["sub-heading"]}>Start creating today!</p>
			</div>
			<Select options={posts} onValueChange={handleChange} placeholder={"Please Select a Post"} />
		</HydrationBoundary>
	);
}
