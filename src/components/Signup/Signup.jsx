import axios from 'axios';
import { useFormik } from 'formik'

import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Signup() {
  let  navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)

 function sendDataToApi(values) {
  setLoading(false)
 axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
 .then(({data})=>{
  console.log(data);
  if (data.message=='success'){
    navigate('/signin')
  }

 }).catch((err)=>{
  console.log(err);
  setErrorMsg(err.response.data.message)
  setLoading(true)

 })

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
      name: Yup.string().min(2).max(20).required(),
      email: Yup.string().email(2).required(),
      password: Yup.string().matches(/^[A-Z][A-Za-z0-9@]{6,}$/).required(),
      rePassword: Yup.string().oneOf([Yup.ref('password')]).required(),


    })
    return schema
    
  }


  let register =useFormik({
    initialValues:{
      name:'',
      email:'', 
      password:'', 
      rePassword:'', 
      // phone:'', 

    },
    // validate,
    validationSchema,
    onSubmit:(values)=>{
  // send to back end
      sendDataToApi(values)

    }
  })
  return (
    <div>
   <div className="w-75 m-auto my-4">
    <h2>Register now:</h2>
    <form onSubmit={register.handleSubmit} >
      <label htmlFor="name">Name:</label>
     <input onBlur={register.handleBlur} value={register.values.name} onChange={register.handleChange} type="text" name='name'  className='form-control mb-3' id='name'/>
    {register.errors.name && register.touched.name?  <div className="alert alert-danger">{register.errors.name}</div>:''}

     <label htmlFor="email">email:</label>
     <input  onBlur={register.handleBlur} value={register.values.email} onChange={register.handleChange} type="email" name='email'  className='form-control mb-3' id='email'/>
     {register.errors.email && register.touched.email?  <div className="alert alert-danger">{register.errors.email}</div>:''}


     <label htmlFor="password">password:</label>
     <input  onBlur={register.handleBlur} value={register.values.password} onChange={register.handleChange} type="password" name='password'  className='form-control mb-3' id='password'/>
 {register.errors.password && register.touched.password?  <div className="alert alert-danger">{register.errors.password}</div>:''}

     <label htmlFor="rePassword">rePassword:</label>
     <input  onBlur={register.handleBlur}  value={register.values.rePassword} onChange={register.handleChange} type="password" name='rePassword'  className='form-control mb-3' id='rePassword'/>
     {register.errors.rePassword && register.touched.rePassword?  <div className="alert alert-danger">{register.errors.rePassword}</div>:''}

     <label htmlFor="phone">phone:</label>
     <input  onBlur={register.handleBlur}  value={register.values.phone} onChange={register.handleChange} type="number" name='phone'  className='form-control mb-3' id='phone'/>
     {register.errors.phone && register.touched.phone?  <div className="alert alert-danger">{register.errors.phone}</div>:''}
     {errorMsg?<div className="alert alert-danger">{errorMsg}</div>:''}
      <button  disabled={!(register.dirty&& register.isValid) } type="submit" className='btn bg-main text-white'>
        {loading ? 'signup' : <i className=' fa fa-spinner fa-spin '></i>}
      </button>
    </form>
   </div>
    </div>
  )
}
