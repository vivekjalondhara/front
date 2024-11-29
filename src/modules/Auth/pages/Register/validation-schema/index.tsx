// ** packages **
import {
  BasicErrorMessage,
  RegisterSchemaError,
} from "constants/formErrorMessage.constant";
import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required(RegisterSchemaError.name),
  email: yup
    .string()
    .trim()
    .required(RegisterSchemaError.email.required)
    .email(RegisterSchemaError.email.valid)
    .lowercase(),
  password: yup
    .string()
    .trim()
    .required(RegisterSchemaError.Password.required)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/ &&
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ &&
        /\d/,
      RegisterSchemaError.Password.valid
    )
    .min(8),
    // .max(12),
  confirmPassword: yup
    .string()
    .required(RegisterSchemaError.confirmPassword.confirm_required)
    .oneOf(
      [yup.ref("password"), ""],
      RegisterSchemaError.confirmPassword.match
    ),
});
