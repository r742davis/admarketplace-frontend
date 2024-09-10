import * as Avatar from "@radix-ui/react-avatar";
import { capitalize } from "@/lib";
import styles from "./Comment.module.scss";
import { Comment as TComment } from "@/types";

export default function Comment({ name = "", body = "" }: Partial<TComment>) {
	return (
		<li className={styles["container"]}>
			<Avatar.Root className={styles.Root}>
				<Avatar.Fallback className={styles.Fallback}>{name[0].toUpperCase()}</Avatar.Fallback>
			</Avatar.Root>
			<div className={styles["content"]}>
				<strong>{capitalize(name)}</strong>
				<p>{body}</p>
			</div>
		</li>
	);
}
