import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/utils';
import styles from './page.module.css';

export default function Home() {
	const queryClient = getQueryClient();

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<main className={styles.main}>
				<div>Postr App!</div>
			</main>
		</HydrationBoundary>
	);
}
