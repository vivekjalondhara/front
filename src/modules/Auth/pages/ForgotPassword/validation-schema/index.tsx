// ** package **
import { EmailError } from "constants/formErrorMessage.constant";
import * as yup from "yup";
export const ForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(EmailError.required)
    .email(EmailError.valid)
    .lowercase(),
});
