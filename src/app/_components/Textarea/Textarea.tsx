import { forwardRef, TextareaHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Textarea.module.scss";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	error?: string | null;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
	return (
		<div className={cn(styles["container"], { className })}>
			<textarea className={cn(styles["textarea"], { [styles["error"]]: error })} ref={ref} {...props} />
			{error && <span className={styles["error-message"]}>{error}</span>}
		</div>
	);
});
Textarea.displayName = "Textarea";

export default Textarea;
