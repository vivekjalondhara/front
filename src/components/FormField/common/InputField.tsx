import * as Icon from "react-feather";
import { TextInputProps } from "../Types/formField.types";
import Label from "../common/LabelField";

const InputField = <TFormValues extends Record<string, unknown>>(
  fieldProps: TextInputProps<TFormValues>
) => {
  const {
    id,
    errors,
    register,
    onIconClick,
    name = "",
    wrapperClass,
    icon,
    value = "",
    type = "text",
    className = "",
    maxLength = 100,
    placeholder = "",
    label = "",
    labelClass = "",
    required = false,
    disabled = false,
    readOnly = false,
    defaultValue = "",
    hidden = false,
    inputMode = "text",
    fieldWrapperClassName = "",
    onChange = () => ({}),
    onBlur = () => ({}),
    onFocus = () => ({}),
    onKeyDown = () => ({}),
    onKeyUp = () => ({}),
  } = fieldProps;

  const renderIcon = () => {
    return (
      <>
        {icon === "Eye" ? (
          <Icon.Eye {...(onIconClick && { onClick: onIconClick })} />
        ) : (
          <></>
        )}
        {icon === "EyeOff" ? (
          <Icon.EyeOff {...(onIconClick && { onClick: onIconClick })} />
        ) : (
          <></>
        )}
      </>
    );
  };
  const renderInput = () => {
    return (
      <div className={`form__group ${wrapperClass}`}>
        <div className={`field__wrapper  ${fieldWrapperClassName}`}>
          {label && (
            <Label
              id={id}
              label={label}
              required={required}
              labelClass={labelClass}
            />
          )}
          <div
            className={`field__inner__wrapper ${
              icon ? "field__has__icon" : ""
            }`}
          >
            <input
              id={id}
              type={type}
              autoComplete="off"
              disabled={disabled}
              readOnly={readOnly}
              placeholder={placeholder}
              className={`input__task ${className}`}
              maxLength={maxLength}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              onKeyDown={onKeyDown}
              inputMode={inputMode}
              hidden={hidden}
              onKeyUp={onKeyUp}
              {...(name && { name })}
              {...(value && { value })}
              {...(defaultValue && { defaultValue })}
              {...(register && name && register(name, { onChange, onBlur }))}
            />
            <div className="icon__wrapper">{renderIcon()}</div>
          </div>

          {errors?.message && (
            <p className="error__message text-left">{errors?.message}</p>
          )}
        </div>
      </div>
    );
  };
  return renderInput();
};
export default InputField;
