import React, { useState } from 'react'
import styles from '@/styles/Login.module.css'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SelectCountry from "../customUI/SelectCountry";
import PhoneNumberInput from "../customUI/PhoneInput";
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import { baseURL } from '../commonFunctions';
import Link from 'next/link';

const SignUpForm = () => {
  const router = useRouter();
  const [country, setCountry] = useState("in");
  const [pass, setPass] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setPass({ ...pass, showPassword: !pass.showPassword });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last Name is required'),
    email: Yup.string().email("Invalid email")
      .required('Email is required'),
    phoneNumber: Yup.string().required("Phone number is required."),
    country: Yup.string().required("Select a country"),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "IN",
    password: ""
  }
  const handlePasswordChange = (prop: any) => (event: any) => {
    setPass({ ...pass, [prop]: event.target.value });
  };

  const handleSubmit = async (values: any) => {
    console.log("entered handle register submit " , values);
    let user={
      
        "name": values.firstName+" "+values.lastName,
        "phoneNumber": values.phoneNumber,
        "email": values.email,
        "country": values.country,
        "password": values.password
    
    }

    await fetch(baseURL+"api/users/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
        console.log(values)
      }}
    >
      {({ touched, errors, isSubmitting, values, setFieldValue }) => (
        <Form className={styles.formWrapper}>
          <div className={styles.nameInputWrapper}>
            <div className={styles.formInputWrapper}>
              <label className={styles.formLabel}>Name</label>
              <Field type="text" placeholder="John" className={`${styles.formInput} ${touched.firstName && errors.firstName ? "is-invalid" : ""}`} name='firstName' />
              {errors.firstName && touched.firstName ? (
                <div className="invalid-feedback">{errors.firstName}</div>
              ) : null}
            </div>

            <div className={styles.formInputWrapper}>
              <label className={styles.formLabel}>Last Name</label>
              <Field type="text" placeholder="Smith" className={`${styles.formInput} ${touched.lastName && errors.lastName ? "is-invalid" : ""}`} name='lastName' />
              {errors.lastName && touched.lastName ? (
                <div className="invalid-feedback">{errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div className={styles.formInputWrapper}>
            <label className={styles.formLabel}>Email</label>
            <Field type="text" placeholder="example@gmail.com" className={`${styles.formInput} ${touched.email && errors.email ? "is-invalid" : ""}`} name='email' />
            {errors.email && touched.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>

          <SelectCountry setCountry={setCountry} country={country} setFieldValue={setFieldValue} errors={errors.country} touched={touched.country} />

          <PhoneNumberInput country={country} setFieldValue={setFieldValue} errors={errors.phoneNumber} touched={touched.phoneNumber} />

          <div className={styles.formInputWrapper}>
            <label className={styles.formLabel}>Email</label>
            <Field
              type={pass.showPassword ? "text" : "password"}
              name='password'
              className={`${styles.formInput} ${touched.password && errors.password ? "is-invalid" : ""}`}
            />
            <IconButton
              className={styles.showPasswordIcon}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {pass.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>

            {errors.password && touched.password ?
              (
                < div className="invalid-feedback">
                  {errors.password}
                </div>
              ) : null
            }
          </div>
          <div className={styles.btnWrapper}>
            <button type="submit" className='primaryButton'>
              Sign Up
            </button>
            <Link href="/login" className={styles.textSmall}>Sign in</Link>
          </div>
        </Form>
      )
      }

    </Formik >
  )
}

export default SignUpForm