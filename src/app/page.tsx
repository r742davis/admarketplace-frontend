"use client";

import { ChangeEvent, useState } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Select } from "@/components";
import { getQueryClient } from "@/lib";

type Post = {
	id: number;
	title: string;
	body: string;
	comments?: [];
};

export default function Home() {
	const [selectedValue, setSelectedValue] = useState("");
	const queryClient = getQueryClient();

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	};

	const posts: Array<Post> = [
		{ id: 1, title: "BLARGHHHHHH", body: "<Body Placeholder>" },
		{ id: 2, title: "Post Title 2", body: "<Body Placeholder>" },
		{ id: 3, title: "Post Title 3", body: "<Body Placeholder>" },
		{ id: 4, title: "Post Title 4", body: "<Body Placeholder>" },
	];

	const mappedOptions = posts.map(p => ({ id: p.id, value: p.title }));

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Select
				options={mappedOptions}
				value={selectedValue}
				onChange={handleChange}
				label={"Please Select a Post"}
			/>
		</HydrationBoundary>
	);
}
