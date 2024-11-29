// ** Packages **
import * as yup from "yup";
import { EmailError } from "../../../../../constants/formErrorMessage.constant";
export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(EmailError.required)
    .email(EmailError.valid)
    .lowercase(),
  password: yup.string().trim().required(""),
});
