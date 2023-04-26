import React, { useMemo, useState } from "react";
import { Form } from "react-bootstrap";
import countryList from "react-select-country-list";
import styles from "@/styles/Login.module.css";
import { Field } from "formik";

const SelectCountry = ({
  setCountry,
  country,
  setFieldValue,
  errors,
  touched,
}) => {
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (e) => {
    setCountry(e.target.value);
    setFieldValue("country", e.target.value);
  };
  return (
    <Form.Group className={styles.formInputWrapper} controlId="formBasicEmail">
      <Form.Label className={styles.formLabel}>Country</Form.Label>
      <Field
        className={styles.formInput}
        options={options}
        as="select"
        value={country}
        onChange={changeHandler}
        defaultValue={country}
        name="country"
      >
        {options.map((key) => {
          return (
            <option value={key.value} key={key.value}>
              {key.label}
            </option>
          );
        })}
      </Field>
      {errors && touched ? (
        <div className="invalid-feedback">{errors}</div>
      ) : null}
    </Form.Group>
  );
};

export default SelectCountry;
