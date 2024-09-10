"use client";

import Link from "next/link";
import styles from "../../page.module.scss";

export default function Error({ error }: { error: Error }) {
	return (
		<div className={styles["not-found"]}>
			<h1>Uh oh! It looks like this post does not exist!</h1>
			<h3>Invalid postId: {error.message}</h3>
			<Link href='/'>Click here for the Home page</Link>
		</div>
	);
}
