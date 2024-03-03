import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { storeContext } from "../../context/storeContext";

export default function Address() {
    let  navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  let{pay} = useContext(storeContext)
  let {id}  = useParams();


  async function sendDataToApi( values) {
    setLoading(false);
 
        let data = await   pay(id , values)
        if (data.status == 'success') {

            window.location.href= data.session.url
            
        }
         
       
   
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
  

  let address = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
     
      // phone: "",
    },

    // validate,
   
    onSubmit: (values) => {
      // send to back end
      sendDataToApi(values);
    },
  });
  return (
    <div>
      <div className="w-75 m-auto my-4">
        <h2>address now:</h2>
        <form onSubmit={address.handleSubmit}>
          <label htmlFor="details">Details:</label>
          <textarea
            onBlur={address.handleBlur}
            value={address.values.email}
            onChange={address.handleChange}
            type="text"
            name="details"
            className="form-control mb-3"
            id="details"
          ></textarea>
         

          <label htmlFor="phone">Phone:</label>
          <input
            onBlur={address.handleBlur}
            value={address.values.password}
            onChange={address.handleChange}
            type="text"
            name="phone"
            className="form-control mb-3"
            id="phone"
          />

          <label htmlFor="city">City:</label>
          <input
            onBlur={address.handleBlur}
            value={address.values.password}
            onChange={address.handleChange}
            type="text"
            name="city"
            className="form-control mb-3"
            id="city"
          />
         
         

          
          <button
            disabled={!(address.dirty && address.isValid)}
            type="submit"
            className="btn bg-main text-white"
          >
            {loading ? "Pay" : "loading..."}
          </button>
        </form>
      </div>
    </div>
  );
}
