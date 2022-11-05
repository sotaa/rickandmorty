import { useRouter } from "next/router";
import { FC } from "react";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
//MUI
import { Alert, Button } from "@mui/material";
//
import { FormikSubmitFunction } from "@housing/lib";
import { TextField } from "@housing/common";

import { SearchForm } from "./models";
//

const initialValues = { searchBox: "" };

const SearchFormSchema = Yup.object().shape({
  searchBox: Yup.string().max(
    50,
    "The maximum number of letters should be 50 letters"
  ),
});

export const SearchBox: FC = () => {
  const router = useRouter();

  const handleOnSubmit: FormikSubmitFunction<SearchForm> = (values) => {
    router.push(`/characters?name=${values.searchBox}&page=1`);
  };

  const formik = useFormik<SearchForm>({
    initialValues: initialValues,
    validationSchema: SearchFormSchema,
    onSubmit: handleOnSubmit,
  });

  const { errors } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off">
        {errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit}</Alert>
        )}
        <TextField
          name="searchBox"
          fullWidth
          placeholder="Enter character name..."
        />
        <Button type="submit" variant="contained" size="large" sx={{ mt: 3 }}>
          Search
        </Button>
      </Form>
    </FormikProvider>
  );
};
