"use client";

import { ChangeEvent, useCallback } from "react";
import styles from "./Select.module.scss";

type Option = {
	id: number;
	value: string;
	label?: string;
};

type SelectProps = {
	options: Array<Option>;
	value: string;
	onChange: (event: ChangeEvent<HTMLSelectElement>, args: Array<unknown>) => void;
	label?: string;
	overrideValue?: boolean;
};

export default function Select({ options = [], overrideValue = true, value = "", onChange, label }: SelectProps) {
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLSelectElement>, ...args: Array<unknown>) => {
			onChange(event, args);
		},
		[onChange]
	);

	return (
		<div className={styles["container"]}>
			{label && <label htmlFor='select'>{label}</label>}
			<select id='select' className={styles["select"]} value={value} onChange={handleChange}>
				<option value='' disabled>
					Please Select a Post
				</option>
				{options.map(option => (
					<option key={option.value} value={overrideValue ? option.id : option.value}>
						{option?.label ?? option.value}
					</option>
				))}
			</select>
		</div>
	);
}
