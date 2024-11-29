// ** Package **
import {
  ChangeEvent,
  ComponentType,
  DetailedHTMLProps,
  FocusEventHandler,
  InputHTMLAttributes,
} from "react";
import { Control, Path, UseFormRegister } from "react-hook-form";
import {
  GroupBase,
  MenuPosition,
  MultiValue,
  MultiValueGenericProps,
  OptionProps,
  SingleValue,
  SingleValueProps,
} from "react-select";
import { FilterOptionOption } from "react-select/dist/declarations/src/filters";

// ** HTML INPUT TYPE **
export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type FieldValues = Record<string, any>;

export type InputTypeFields =
  | "text"
  | "hidden"
  | "email"
  | "password"
  | "color"
  | "file"
  | "date"
  | "datetime-local"
  | "number"
  | "url";

// ** HTML INPUT ONCHANGE TYPE **
export type CommonChangeEvent<TElement> = (
  event: ChangeEvent<TElement>
) => void;

// ** COMMON PROPS TYPE **
export type CommonInputProps = {
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  wrapperClass?: string;
  required?: boolean;
  fromGroupClass?: string;
  labelClass?: string;
  errorClass?: string;
  onIconClick?: () => void;
  errors?: { message?: string; [key: string]: any };
};
type IconType = "Eye" | "EyeOff";

// ** TEXT INPUT PROPS TYPE **
export interface TextInputProps<TFormValues extends FieldValues>
  extends CommonInputProps,
    InputProps {
  id?: string;
  name: Path<TFormValues>;
  type?: InputTypeFields;
  value?: string;
  size?: number;
  maxLength?: number;
  placeholder?: string;
  register?: UseFormRegister<TFormValues>;
  autoComplete?: "on" | "off";
  autofocus?: boolean;
  spellcheck?: boolean;
  icon?: IconType | undefined;
  iconClass?: string;
  inputMode?:
    | "text"
    | "search"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
  onChange?: CommonChangeEvent<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  fieldWrapperClassName?: string;
}

export type Option = {
  __isNew__?: boolean;
  label: string;
  value: string | number;
  selected?: boolean;
  checked?: boolean;
  onChange?: () => void;
  color?: string;
  extraLabel?: string;
  [key: string]: any;
};
export type GetAllApiPropsType = {
  search?: string;
  page?: number;
  [key: string]: any;
};
export type AsyncSelectGetOptionsType = (
  option?: GetAllApiPropsType
) => Promise<
  { option: Option[]; count: number; extraInfo?: any[] } | undefined
>;

export interface FormFieldProps<TFormValues extends FieldValues>
  extends TextInputProps<TFormValues> {
  control?: Control<TFormValues>;
  showDropdown?: boolean;
  errors?: { message?: string; [key: string]: any };
}

type StylesType = {
  container?: (provided: any) => any;
  control?: (provided: any) => any;
  menu?: (provided: any) => any;
  option?: (provided: any, state: any) => any;
  placeholder?: (provided: any) => any;
  singleValue?: (provided: any) => any;
};

export interface ReactSelectPropsTypes<TFormValues extends FieldValues>
  extends CommonInputProps {
  // ** Basic Input Properties
  key?: string;
  name?: Path<TFormValues>;
  control?: Control<TFormValues>;
  value?: MultiValue<Option> | SingleValue<Option>;
  onChange?: (...event: any[]) => void;

  // ** Select Options
  options?: Option[];
  isMulti?: boolean;
  placeholder?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  menuPosition?: MenuPosition;
  isInputValuePrevent?: boolean;
  menuPlacement?: "auto" | "top" | "bottom";
  setInputValue?: React.Dispatch<React.SetStateAction<boolean>>;

  // ** Customization and Accessibility
  formatOptionLabel?: (option: Option, context: any) => React.ReactNode;
  components?: any;
  ["aria-label"]?: string;
  ["aria-labelledby"]?: string;
  isOptionDisabled?: (option: Option) => boolean;
  loadingMessage?: () => string | null;
  isCreatable?: boolean;
  isValidNewOption?: (
    inputValue?: string,
    selectValue?: any,
    selectOptions?: any
  ) => boolean;
  virtualized?: boolean;
  getOptionLabel?: (option: Option) => string;
  getOptionValue?: (option: Option) => string;

  // ** Event Handlers
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  onInputChange?: (inputValue: string, actionMeta: any) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;

  // ** Accessibility and Styling
  tabIndex?: number;
  menuIsOpen?: boolean;
  styles?: StylesType;
  inputMaxLength?: number;

  // ** Async Select (if applicable)
  getOptions?: AsyncSelectGetOptionsType;
  onFocusApiCall?: boolean;
  defaultSelectValue?: Option;
  defaultOptions?: Option[];
  serveSideSearch?: boolean;
  getOnChange?: (...event: any[]) => void;

  // ** Custom No Options Message and Components
  noOptionsMessage?: () => React.ReactNode;
  OptionComponent?: ComponentType<
    OptionProps<Option, boolean, GroupBase<Option>>
  >;
  singleValueComponent?: React.ComponentType<
    SingleValueProps<Option, boolean, GroupBase<Option>>
  >;
  MultiValueComponent?: (props: MultiValueGenericProps) => JSX.Element;
  filterOption?: (
    option: FilterOptionOption<Option>,
    inputValue: string
  ) => boolean;
}
