import { noop } from 'lodash';
import React from 'react';

type SubmitHandler = (params: { [fieldName: string]: string }) => void;

type FormShape = {
	fields: {
		[fieldName: string]: {
			onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
			value: string;
		};
	};
	handleSubmit: (handler: SubmitHandler) => (event: React.SyntheticEvent) => void;
};

type Config = { initialValues: { [fieldName: string]: string }; fields: string[] };

export default function useForm({ initialValues, fields }: Config): FormShape {
	const [fieldValues, setFields] = React.useState(
		fields.map(field => ({ [field]: initialValues[field] || '' })).reduce((prev, curr) => ({ ...prev, ...curr }), {})
	);

	const setFieldValue = (fieldName: string, value: string) => setFields(fields => ({ ...fields, [fieldName]: value }));

	function handleSubmit(handler: SubmitHandler) {
		return (evt: React.SyntheticEvent) => {
			evt.preventDefault();
			return handler(fieldValues);
		};
	}

	return {
		fields: fields
			.map(field => ({
				[field]: {
					onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
						setFieldValue(field, e.target.value),
					value: fieldValues[field]
				}
			}))
			.reduce((prev, curr) => ({ ...prev, ...curr }), {}),
		handleSubmit
	};
}

export function fakeEvent(values: any): React.ChangeEvent<HTMLInputElement> {
	return {
		...values,
		addEventListener: noop,
		dispatchEvent: noop
	};
}
