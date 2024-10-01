import { capitalize } from "@richie/lib/";
import * as Avatar from "@radix-ui/react-avatar";
import styles from "./Comment.module.scss";

export type Comment = { postId: number; id: number; name: string; email: string; body: string };

export default function Comment({ name = "", body = "" }: Comment) {
	return (
		<li className={styles["container"]}>
			<Avatar.Root className={styles["root"]}>
				<Avatar.Fallback className={styles["fallback"]}>{name[0].toUpperCase()}</Avatar.Fallback>
			</Avatar.Root>
			<div className={styles["content"]}>
				<strong>{capitalize(name)}</strong>
				<p>{body}</p>
			</div>
		</li>
	);
}
