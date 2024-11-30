export enum BasicErrorMessage {
  numberOnly = "Please enter only number",
  valid_number = "Please enter a valid number",
  minLengthName = "should be at least 3 characters",
  maxLengthName = "should be at most 75 characters",
  name = "Name is required",
}

export enum PasswordError {
  required = "Password is required",
  valid = "Passwords must be at least 8 characters with a mix of uppercase, lowercase, numbers and symbols.",
  confirm_required = "Confirm password is required",
  minLengthReq = "At least 12 characters",
  upperLowerReq = "At least 1 uppercase and 1 lowercase",
  numberReq = "At least 1 number",
  specialCharReq = "At least 1 special character.",
  match = "Password and confirm password must match",
}

export enum EmailError {
  required = "Email is required",
  valid = "Please enter a valid email address",
}

export const RegisterSchemaError = {
  name: BasicErrorMessage.name,
  email: EmailError,
  Password: PasswordError,
  confirmPassword: PasswordError,
};
