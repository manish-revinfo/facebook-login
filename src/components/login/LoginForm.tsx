import React from 'react';
import styles from "@/styles/Login.module.css";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import AuthServices from '../../../services/AuthService';
import Link from 'next/link';
import { baseURL } from '../commonFunctions';
import axios from 'axios';

const LoginForm = () => {
    const router = useRouter();
    const [pass, setPass] = React.useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setPass({ ...pass, showPassword: !pass.showPassword });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop: any) => (event: any) => {
        setPass({ ...pass, [prop]: event.target.value });
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email")
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const initialValues = {
        email: "",
        password: ""
    }

    const handleSubmit = async (values: any) => {
        let user = {
            "email": values.email,
            "password": values.password
        }
        // await fetch(baseURL + "api/auth/login", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(user),
        // });
        let response = await axios.post("http://localhost:3000/api/auth/login",
            JSON.stringify(user),
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
        const accessToken = response?.data?.accessToken;
        console.log("response ", response)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
                handleSubmit(values)
            }}
        >
            {({ touched, errors, isSubmitting, values, setFieldValue }) => (
                <Form className={styles.formWrapper}>
                    <div className={styles.formInputWrapper}>
                        <label className={styles.formLabel}>Email</label>
                        <Field type="email" placeholder="example@gmail.com" className={styles.formInput} name="email" />
                    </div>

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
                            Login
                        </button>
                        <Link href="/sign-up" className={styles.textSmall}>Sign up</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;