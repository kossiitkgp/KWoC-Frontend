import React, { ReactNode, createRef } from "react";

interface IObject<T> {
	[name: string]: T;
}
type MappedObject<S, T> = {
	[Property in keyof S]: T;
}

type InputSettings = IObject<IInputFields>;
type Responses<S extends InputSettings> = MappedObject<S, string>;

interface IFormProps<S extends InputSettings> {
	title: string;
	fields: S;
	onSubmit: (responses: Responses<S>) => void;
}

function Form<S extends InputSettings>(props: IFormProps<S>) {
	const inputProps: IObject<IFormInputProps> = {};
	const responses: Responses<S> = {} as Responses<S>;
	const inputs: ReactNode[] = [];

	for (let name in props.fields) {
		inputProps[name] = {
			...props.fields[name],
			inputRef: createRef<HTMLInputElement>()
		}

		responses[name] = inputProps[name].defaultValue ?? '';

		inputs.push(
			<FormInput
				key={name}
				{...inputProps[name]}
			/>
		);
	}

	return (
		<div className="pt-32 w-full md:w-96 md:max-w-full mx-auto rounded-md">
		<div className="p-10 border border-slate-700 sm:rounded-md">
			<form>
			<h1 className="text-center text-3xl mb-10 ">{props.title}</h1>
			{Object.values(inputs)}
			<div className="mb-4 text-center">
				<button
					type="submit"
					className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
				>
				Submit
				</button>
			</div>
			</form>
		</div>
		</div>
	);
}

interface IInputFields {
	field: string;
	placeholder: string;
	defaultValue?: string;
	required?: boolean;
	type: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

interface IFormInputProps extends IInputFields {
	inputRef: React.RefObject<HTMLInputElement>;
}
function FormInput(props: IFormInputProps) {
	return (
		<label className="block mb-10">
			<span className="text-white">{props.field}</span>
			<input
				type={props.type}
				ref={props.inputRef}
				className="block w-full mt-2 px-2 py-1 bg-gray-800 text-white border-slate-700 rounded-md shadow-sm focus:border-indigo-700 focus:ring focus:ring-indigo-700 focus:ring-opacity-50"
				placeholder={props.placeholder}
				required={props.required ?? false}
				value={props.defaultValue ?? ''}
			/>
		</label>
	);
}

export default Form;