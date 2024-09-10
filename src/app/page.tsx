"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { HydrationBoundary, dehydrate, useQuery } from "@tanstack/react-query";
import { Select } from "@/components";
import { getPosts, getQueryClient, QUERY_KEYS } from "@/lib";
import styles from "./page.module.scss";

export default function Home() {
	const { push } = useRouter();
	const queryClient = getQueryClient();

	const handleChange = useCallback(
		(value: string) => {
			push(`/posts/${value}`);
		},
		[push]
	);

	const { data: posts } = useQuery({
		queryKey: QUERY_KEYS.POSTS.LIST,
		queryFn: getPosts,
		select: res => {
			return res?.map(({ id, title }) => ({ id, value: `Post #${id}: ${title}` })) ?? null;
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
			<Select items={posts} onChange={handleChange} placeholder={"Please Select a Post"} />
		</HydrationBoundary>
	);
}
