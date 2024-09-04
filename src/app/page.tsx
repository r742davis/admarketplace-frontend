import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Select } from "@/components";
import { getQueryClient } from "@/utils";
import styles from "./page.module.scss";

export default function Home() {
	const queryClient = getQueryClient();

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<main className={styles.main}>
				<div>
					<h1>Select a Post</h1>
					{/* Placeholder Component */}
					<Select />
				</div>
			</main>
		</HydrationBoundary>
	);
}
