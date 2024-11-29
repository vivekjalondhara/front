import * as yup from "yup";

export const taskValidatioonSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  status: yup
    .object()
    .shape({
      label: yup.string().required("Status  is required"),
      value: yup.string().required("Status is required"),
    })
    .required("Status is required"),
});
