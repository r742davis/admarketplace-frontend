import { ReactNode } from "react";
import styles from "./Main.module.scss";

type MainProps = {
	children: ReactNode;
};

export default function Main({ children }: MainProps) {
	return (
		<main role='main' className={styles["main"]}>
			{children}
		</main>
	);
}
