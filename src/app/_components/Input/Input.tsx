// Shadcn-UI
import { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return <input type={type} className={cn(styles["input"], { className })} ref={ref} {...props} />;
});
Input.displayName = "Input";

export default Input;
