"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { HydrationBoundary, dehydrate, useQuery } from "@tanstack/react-query";
import { Select } from "@/components";
import { getPosts, getQueryClient, QUERY_KEYS } from "@/lib";

export default function Home() {
	const [selectedValue, setSelectedValue] = useState("");
	const { push } = useRouter();
	const queryClient = getQueryClient();

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			setSelectedValue(event.target.value);
			push(`/posts/${event.target.value}`);
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
			<Select
				overrideValue
				options={posts ?? []}
				value={selectedValue}
				onChange={handleChange}
				label={"Please Select a Post"}
			/>
		</HydrationBoundary>
	);
}
