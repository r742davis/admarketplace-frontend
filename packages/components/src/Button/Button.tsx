import { useCallback, MouseEvent } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	type?: "button" | "submit" | "reset";
	variant?: ButtonVariant;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
	children,
	className,
	disabled = false,
	size = "medium",
	type = "button",
	variant = "primary",
	onClick,
}: ButtonProps) {
	const handleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			if (disabled) {
				event.preventDefault();
				return;
			}
			if (onClick) {
				onClick(event);
			}
		},
		[disabled, onClick]
	);

	return (
		<button
			type={type}
			className={cn(styles["button"], styles[variant], styles[size], {
				[`${className}`]: !!className,
				disabled: styles["disabled"],
			})}
			onClick={handleClick}
			disabled={disabled}>
			{children}
		</button>
	);
}
