import { ReactElement } from "react";
import { FieldHookConfig, useField } from "formik";

import { TextFieldProps, TextField as OriginalTextField } from "@mui/material";

type Props = FieldHookConfig<any> &
  TextFieldProps & {
    suffix?: string | ReactElement;
    prefix?: string;
  };

export function TextField({
  name,
  helperText,
  suffix,
  prefix,
  ...props
}: Props) {
  const [
    field,
    { touched, error, initialTouched, value, initialValue },
    helpers,
  ] = useField(name);

  return (
    <OriginalTextField
      {...field}
      fullWidth
      error={Boolean(touched && error)}
      helperText={(touched && error) || helperText}
      {...props}
    />
  );
}
