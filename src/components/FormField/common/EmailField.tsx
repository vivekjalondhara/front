// ** Custom Component **
// ** Components **
// ** Type **

import { TextInputProps } from "../Types/formField.types";
import InputField from "./InputField";

const EmailField = <TFormValues extends Record<string, unknown>>(
  fieldProps: TextInputProps<TFormValues>
) => {
  return (
    <InputField
      {...{
        ...fieldProps,
      }}
      type="email"
    />
  );
};

export default EmailField;
