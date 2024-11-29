// ** Custom Component **

import { TextInputProps } from "../Types/formField.types";
import InputField from "../common/InputField";

// ** Type **

const TextField = <TFormValues extends Record<string, unknown>>(
  fieldProps: TextInputProps<TFormValues>
) => {
  return <InputField {...fieldProps} type="text" />;
};

export default TextField;
