import { Label } from "@radix-ui/react-label";
import styles from "./Comment.module.scss";
import { Comment as TComment } from "@/types";

export default function Comment({ name, body }: Partial<TComment>) {
	return (
		<li className={styles["container"]}>
			<Label>Name</Label>
			<span>{name}</span>
			<p>{body}</p>
		</li>
	);
}
