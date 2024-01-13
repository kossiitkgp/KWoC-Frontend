import React, { ReactNode, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import SpinnerLoader from "./SpinnerLoader";

interface IObject<T> {
  [name: string]: T;
}
type MappedObject<S, T> = {
  [Property in keyof S]: T;
};

export type InputSettings = IObject<IInputFields>;
type Responses<S extends InputSettings> = MappedObject<S, string>;

interface IFormProps<S extends InputSettings> {
  title: string;
  fields: S;
  error: string | null;
  info: string | null;
  disabled?: boolean;
  loading?: boolean;
  staticMessage?: string | ReactNode; // New prop for a static warning message
  submitWithoutChange?: boolean;
  onSubmit: (responses: Responses<S>) => Promise<boolean>;
  onCancel?: (responses: Responses<S>) => void;
}

function Form<S extends InputSettings>(props: IFormProps<S>) {
  const inputProps: IObject<IFormInputProps> = {};
  const default_responses: Responses<S> = {} as Responses<S>;

  const [responses, setResponses] = useState<Responses<S>>(default_responses);
  const [responsesChanged, setResponsesChanged] = useState(false);
  const inputs: ReactNode[] = [];

  const disabled = props.disabled ?? false;
  const loading = props.loading ?? false;

  for (let name in props.fields) {
    inputProps[name] = {
      ...props.fields[name],
      onChange: (value) => {
        const newResponses = {
          ...responses,
          [name]: value,
        };

        setResponses(newResponses);

        for (let name in newResponses) {
          if (newResponses[name] !== default_responses[name]) {
            setResponsesChanged(true);
            return;
          }
        }

        setResponsesChanged(false);
      },
      disabled,
    };

    default_responses[name] = inputProps[name].defaultValue ?? "";
    inputs.push(<FormInput key={name} {...inputProps[name]} />);
  }

  return (
    <div className="rounded-md">
      <div className="p-8 border border-slate-700 sm:rounded-md">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if ((responsesChanged || props.submitWithoutChange) && !disabled) {
              const isOk = await props.onSubmit(responses);
              setResponsesChanged(!isOk);
            }
          }}
        >
          <h1 className="text-center text-3xl mb-5">{props.title}</h1>
          {props.error && (
            <p className="text-red-500 text-center">{props.error}</p>
          )}
          {props.info && (
            <p className="text-primary text-center">{props.info}</p>
          )}
          {loading && <SpinnerLoader />}

          {props.staticMessage && (
            <p className="flex items-center justify-center mb-3">
              {typeof props.staticMessage == 'string' &&
                <span className="h-full">
                  <IconContext.Provider value={{ size: "1.5rem" }}>
                    <RiErrorWarningFill className="mr-2 fill-gray-300" />
                  </IconContext.Provider>
                </span>
              }
              <span className="text-gray-300">{props.staticMessage}</span>
            </p>
          )}

          {Object.values(inputs)}
          <div className="flex justify-around">
            <div className="mb-2 text-center">
              <button
                type="submit"
                className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 disabled:text-gray-300 disabled:bg-gray-600"
                disabled={
                  (!responsesChanged && !props.submitWithoutChange) || disabled
                }
              >
                Submit
              </button>
            </div>
            {props.onCancel !== undefined && (
              <div className="mb-2 text-center">
                <button
                  type="reset"
                  className="h-10 px-5 text-indigo-100 bg-red-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-800 disabled:text-gray-600 disabled:bg-gray-600"
                  onClick={() => props.onCancel!(responses)}
                >
                  Cancel
                </button>
              </div>
            )}
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
  disabled?: boolean;
  required?: boolean;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

interface IFormInputProps extends IInputFields {
  onChange: (value: string) => void;
}
function FormInput(props: IFormInputProps) {
  return (
    <label className="block mb-6">
      <span className="text-white">{props.field}</span>
      <input
        type={props.type}
        disabled={props.disabled ?? false}
        className="block w-full mt-2 px-2 py-1 bg-gray-800 text-white border-slate-700 rounded-md shadow-sm focus:border-indigo-700 focus:ring focus:ring-indigo-700 focus:ring-opacity-5 disabled:text-gray-600 disabled:placeholder:text-gray-600"
        placeholder={props.placeholder}
        required={props.required ?? false}
        defaultValue={props.defaultValue ?? ""}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </label>
  );
}

export default Form;
