import Link from "next/link";
import styles from "./page.module.scss";

export default function NotFound() {
	return (
		<div className={styles["not-found"]}>
			<h1>404: Page Not Found</h1>
			<Link href='/'>Click here for the Home page</Link>
		</div>
	);
}
