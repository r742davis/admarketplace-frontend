"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { HydrationBoundary, dehydrate, useQuery } from "@tanstack/react-query";
import { Select } from "@/components";
import { getPosts, getQueryClient, QUERY_KEYS } from "@/lib";

export default function Home() {
	const [selectedValue, setSelectedValue] = useState("");
	const { push } = useRouter();
	const queryClient = getQueryClient();

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
		push(`/posts/${event.target.value}`);
	};

	// TODO
	// Query Options: Caching, Focus Refetching, Retries, {enabled}, Parallel Fetching
	const { data } = useQuery({
		queryKey: QUERY_KEYS.POSTS.LIST,
		queryFn: getPosts,
		select: data => {
			return data?.data.map(({ id, title }) => ({ id, value: `Post #${id}: ${title}` })) ?? null;
		},
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Select
				overrideValue
				options={data ?? []}
				value={selectedValue}
				onChange={handleChange}
				label={"Please Select a Post"}
			/>
		</HydrationBoundary>
	);
}
