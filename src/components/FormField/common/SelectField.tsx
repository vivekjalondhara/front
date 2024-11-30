// ** Packages **
import { Controller } from "react-hook-form";
import ReactSelect, { MultiValue, SingleValue } from "react-select";
import { Option, ReactSelectPropsTypes } from "../Types/formField.types";
import Label from "./LabelField";

const SelectField = <TFormValues extends Record<string, unknown>>(
  fieldProps: ReactSelectPropsTypes<TFormValues>
) => {
  const {
    name,
    label = "",
    errors,
    value,
    control,
    required,
    placeholder,
    getOnChange,
    options = [],
    errorClass = "",
    isMulti = false,
    labelClass = "",
    OptionComponent,
    noOptionsMessage,
    disabled = false,
    wrapperClass = "",
    isLoading = false,
    fromGroupClass = "",
    isSearchable = false,
    singleValueComponent,
    menuPlacement = "auto",
    menuPosition = "fixed",
    onChange: onCustomChange,
    defaultSelectValue,
  } = fieldProps;
  return (
    <div
      className={`field__wrapper mb-4 mx-auto ${
        errors?.message || errors?.value?.message ? "field__has__error" : ""
      } ${disabled ? "disable" : ""} ${fromGroupClass}`}
    >
      <div className={`select__SD custom-select ${wrapperClass}`}>
        {label && (
          <Label
            id={name}
            label={label}
            labelClass={labelClass}
            required={required}
          />
        )}
        <div
          className={`field__inner__wrapper 
          }`}
        >
          {control ? (
            name && (
              <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value: innerValue, ref } }) => (
                  <>
                    <ReactSelect
                      ref={ref}
                      options={options}
                      isMulti={isMulti}
                      key={Number(value)}
                      isLoading={isLoading}
                      isDisabled={disabled}
                      className="basic-single"
                      placeholder={placeholder}
                      isSearchable={isSearchable}
                      menuPosition={menuPosition}
                      defaultValue={defaultSelectValue}
                      classNamePrefix="select__SD"
                      menuPlacement={menuPlacement}
                      {...(noOptionsMessage && { noOptionsMessage })}
                      value={
                        innerValue as MultiValue<Option> | SingleValue<Option>
                      }
                      onChange={(selectedOption, e) => {
                        onChange(selectedOption);
                        getOnChange?.(selectedOption);
                        onCustomChange?.(selectedOption, e);
                      }}
                      components={{
                        ...(OptionComponent && { Option: OptionComponent }),
                        ...(singleValueComponent && {
                          SingleValue: singleValueComponent,
                        }),
                      }}
                    />
                  </>
                )}
              />
            )
          ) : (
            <ReactSelect
              options={options}
              isMulti={isMulti}
              value={
                value as unknown as MultiValue<Option> | SingleValue<Option>
              }
              key={Number(value)}
              isLoading={isLoading}
              isDisabled={disabled}
              className="basic-single"
              placeholder={placeholder}
              isSearchable={isSearchable}
              defaultValue={defaultSelectValue}
              menuPosition={menuPosition}
              classNamePrefix="select__SD"
              menuPlacement={menuPlacement}
              {...(noOptionsMessage && { noOptionsMessage })}
              onChange={(selectedOption, e) => {
                onCustomChange?.(selectedOption, e);
                getOnChange?.(selectedOption);
              }}
              components={{
                ...(OptionComponent && { Option: OptionComponent }),
                ...(singleValueComponent && {
                  SingleValue: singleValueComponent,
                }),
              }}
            />
          )}
        </div>
      </div>

      {errors?.message && <p className="error__message">{errors?.message}</p>}
    </div>
  );
};

export default SelectField;
