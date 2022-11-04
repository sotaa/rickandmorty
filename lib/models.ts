import { FormikHelpers } from "formik";

export type FormikSubmitFunction<T> = (
  values: T,
  formikHelpers: FormikHelpers<T>
) => void;
