import { forwardRef, TextareaHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Textarea.module.scss";
import inputStyles from "../Input/Input.module.scss";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
	error?: string | null;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
	return (
		<div className={cn(styles["container"], { [`${className}`]: !!className })}>
			<textarea
				className={cn(styles["textarea"], inputStyles["textarea"], { [inputStyles["error"]]: !!error })}
				ref={ref}
				{...props}
			/>
			{error && <span className={inputStyles["error-message"]}>{error}</span>}
		</div>
	);
});
Textarea.displayName = "Textarea";

export default Textarea;
