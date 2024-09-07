import { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	error?: string | null;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => {
	return (
		<div className={cn(styles["container"], { className })}>
			<input type={type} className={cn(styles["input"], { [styles["error"]]: !!error })} ref={ref} {...props} />
			{error && <span className={styles["error-message"]}>{error}</span>}
		</div>
	);
});
Input.displayName = "Input";

export default Input;
