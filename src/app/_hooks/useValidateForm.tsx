import { useState, useRef, useCallback } from "react";

type FormErrors<T> = { [Prop in keyof T]?: string | null };
type UseFormValidationHook<T> = {
	validators: { [Prop in keyof T]: (value: T[Prop]) => string | null };
};

export function useFormValidation<T>({ validators }: UseFormValidationHook<T>) {
	const [errors, setErrors] = useState<FormErrors<T>>({});
	const fieldsRef = useRef<{ [Prop in keyof T]?: HTMLInputElement | HTMLTextAreaElement | null }>({});

	const validateForm = useCallback(() => {
		const newErrors: FormErrors<T> = {};
		const fKeys = Object.keys(validators) as Array<keyof T>;

		fKeys.forEach(field => {
			const value = (fieldsRef.current[field]?.value || "") as T[keyof T];
			const error = validators[field](value);

			if (error) newErrors[field] = error;
		});

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	}, [validators]);

	const register = useCallback(
		(fieldName: keyof T) => (ref: HTMLInputElement | HTMLTextAreaElement | null) => {
			fieldsRef.current[fieldName] = ref;
		},
		[]
	);

	const gatherFields = useCallback(() => {
		const fields = {} as { [Prop in keyof T]?: string | null };
		const fKeys = Object.keys(validators) as Array<keyof T>;

		fKeys.forEach(field => {
			const value = fieldsRef.current[field]?.value || "";
			fields[field] = value;
		});

		return fields as { [Prop in keyof T]: string };
	}, [validators]);

	return {
		fields: gatherFields(),
		errors,
		register,
		validateForm,
	};
}
