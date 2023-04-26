import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styles from "@/styles/Login.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = ({ country,errors, touched ,setFieldValue}) => {
  const [value, setValue] = useState();
  const [region, setRegion] = useState(country);
  useEffect(() => {
    setRegion(country.toLowerCase());
  }, [country]);

  return (
    <Form.Group className={styles.formInputWrapper} controlId="formBasicEmail">
      <Form.Label className={styles.formLabel}>Email</Form.Label>
      <PhoneInput
        country={region}
        value={value}
        onChange={(phone) => setFieldValue("phoneNumber" ,phone)}
        className={`customPhoneInput`}
        name={"phoneNumber"}
      />
      {errors && touched ? (
        <div className="invalid-feedback">{errors}</div>
      ) : null}
    </Form.Group>
  );
};

export default PhoneNumberInput;
