"use client";

import { ChangeEvent } from "react";
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
};

export default function Select({ options = [], value = "", onChange, label }: SelectProps) {
	const handleChange = (event: ChangeEvent<HTMLSelectElement>, ...args: Array<unknown>) => {
		onChange(event, args);
	};

	return (
		<div className={styles["container"]}>
			{label && <label htmlFor='select'>{label}</label>}
			<select id='select' className={styles["select"]} value={value} onChange={handleChange}>
				<option value='' disabled>
					Please Select a Post
				</option>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option?.label ?? option.value}
					</option>
				))}
			</select>
		</div>
	);
}
