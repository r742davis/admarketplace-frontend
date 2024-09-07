import { forwardRef, TextareaHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Textarea.module.scss";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return <textarea className={cn(styles["textarea"], { className })} ref={ref} {...props} />;
});
Textarea.displayName = "Textarea";

export default Textarea;
