import { NavigationMenu } from "@/components";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles["header"]}>
			<h1>postr</h1>
			<NavigationMenu />
		</header>
	);
}
