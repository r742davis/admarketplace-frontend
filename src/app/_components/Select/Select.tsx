"use client";

import { forwardRef } from "react";
import cn from "classnames";
import * as ReactSelect from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { testIds } from "./Select.test-ids";
import styles from "./Select.module.scss";

export type SelectProps = {
	options: Array<{ id: string; value: string; label?: string }> | undefined;
	placeholder?: string;
	onValueChange?(value: string): void;
};

export default function Select({ options, placeholder = "Select an item", onValueChange, ...props }: SelectProps) {
	return (
		<ReactSelect.Root onValueChange={onValueChange} open={true} {...props}>
			<ReactSelect.Trigger className={styles["trigger"]} aria-label='Food' data-testid={testIds.trigger}>
				<ReactSelect.Value placeholder={placeholder} />
				<ReactSelect.Icon className={styles["icon"]}>
					<ChevronDownIcon />
				</ReactSelect.Icon>
			</ReactSelect.Trigger>
			<ReactSelect.Portal>
				<ReactSelect.Content className={styles["content"]}>
					<ReactSelect.ScrollUpButton className={styles["scroll-button"]}>
						<ChevronUpIcon />
					</ReactSelect.ScrollUpButton>
					<ReactSelect.Viewport className={styles["viewport"]} data-testid={testIds.dropdown}>
						{options &&
							options.map(opt => (
								<SelectItem key={opt.value} value={opt.id} data-testid={testIds.selectItem}>
									{opt?.label ?? opt.value}
								</SelectItem>
							))}
					</ReactSelect.Viewport>
					<ReactSelect.ScrollDownButton className={styles["scroll-button"]}>
						<ChevronDownIcon />
					</ReactSelect.ScrollDownButton>
				</ReactSelect.Content>
			</ReactSelect.Portal>
		</ReactSelect.Root>
	);
}

const SelectItem = forwardRef<HTMLDivElement, ReactSelect.SelectItemProps>((props, forwardedRef) => {
	return (
		<ReactSelect.Item className={cn(styles["item"], props.className)} {...props} ref={forwardedRef}>
			<ReactSelect.ItemText>{props.children}</ReactSelect.ItemText>
			<ReactSelect.ItemIndicator className={styles["item-indicator"]}>
				<CheckIcon />
			</ReactSelect.ItemIndicator>
		</ReactSelect.Item>
	);
});

SelectItem.displayName = "SelectItem";
