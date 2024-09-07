"use client";

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
	return (
		<div>
			<h3>Invalid postId: {error.message}</h3>
			<Link href='/'>Click here for the Home page</Link>
		</div>
	);
}
