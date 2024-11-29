// ** Packages **
import { useState } from "react";

// ** Components **
import InputField from "./InputField";

// ** Types **
import { TextInputProps } from "../Types/formField.types";

const PasswordField = <TFormValues extends Record<string, unknown>>(
  fieldProps: TextInputProps<TFormValues>
) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <InputField
        {...{
          ...fieldProps,
          onIconClick: () => {
            togglePasswordVisibility();
          },
          isIconRight: true,
          icon: isPasswordVisible ? "EyeOff" : "Eye",
        }}
        type={isPasswordVisible ? "text" : "password"}
      />
    </div>
  );
};

export default PasswordField;
