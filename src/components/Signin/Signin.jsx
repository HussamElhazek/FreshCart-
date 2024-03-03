import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import * as Yup from "yup";

export default function Signin() {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  let  navigate = useNavigate();

  function sendDataToApi(values) {
    setLoading(false);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then(({ data }) => {
        console.log(data); 
        if(data.message =='success'){
          localStorage.setItem('token', data.token)
          navigate('/home')
          
        }
      })
      .catch((err) => {
        setErrorMsg(err.response.data.message);
        setLoading(true);
      });
  }

  // function validate (values){
  //   const myError = { }
  //   if (!values.name){
  //     myError.name = "name is requried"
  //   }
  //   if (!values.email){
  //     myError.email = "email is requried"
  //   }
  //   if (!/^[A-Z][A-Za-z0-9@]{6,}$/.test(values.password)){
  //     myError.password = "wrong password ya beh"
  //   }
  //   if (values.rePassword!= values.password  ){
  //     myError.rePassword = "password and rePassword not match wake up !!!!"
  //   }
  //   if (!values.phone){
  //     myError.phone = "phone   is requried"
  //   }

  //   return myError

  // }
  function validationSchema(values) {
    let schema = new Yup.object({
      email: Yup.string().email(2).required(),
      password: Yup.string()
        .matches(/^[A-Z][A-Za-z0-9@]{6,}$/)
        .required(),
    });
    return schema;
  }

  let login = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      // phone: "",
    },
    // validate,
    validationSchema,
    onSubmit: (values) => {
      // send to back end
      sendDataToApi(values);
    },
  });
  return (
    <div>
      <div className="w-75 m-auto my-4">
        <h2>login now:</h2>
        <form onSubmit={login.handleSubmit}>
          <label htmlFor="email">email:</label>
          <input
            onBlur={login.handleBlur}
            value={login.values.email}
            onChange={login.handleChange}
            type="email"
            name="email"
            className="form-control mb-3"
            id="email"
          />
          {login.errors.email && login.touched.email ? (
            <div className="alert alert-danger">{login.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="password">password:</label>
          <input
            onBlur={login.handleBlur}
            value={login.values.password}
            onChange={login.handleChange}
            type="password"
            name="password"
            className="form-control mb-3"
            id="password"
          />
          {login.errors.password ? (
            <div className="alert alert-danger">{login.errors.password}</div>
          ) : (
            ""
          )}

          {errorMsg ? <div className="alert alert-danger">{errorMsg}</div> : ""}
          <button
            disabled={!(login.dirty && login.isValid)}
            type="submit"
            className="btn bg-main text-white"
          >
            {loading ? "signin" : "loading..."}
          </button>
        </form>
      </div>
    </div>
  );
}
