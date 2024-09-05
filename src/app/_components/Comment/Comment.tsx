import { Comment as TComment } from "@/types";

export default function Comment({ name, body }: Partial<TComment>) {
	return (
		<li>
			Comment:
			<p>{name}</p>
			<p>{body}</p>
		</li>
	);
}
