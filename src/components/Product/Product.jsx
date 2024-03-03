import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { storeContext } from '../../context/storeContext'
import {toast } from 'react-toastify'

export default function Product({item}) {

  let {counter, setCounter , addToCart} = useContext(storeContext)
  let [btnLoading,setBtnLoading] = React.useState(true)

  async function addProductToCart(productId) {
    setBtnLoading(false)
  let data = await  addToCart(productId)
  console.log(data);
  

  if (data.status == 'success') {
    toast.error ('product add successfully')
    setCounter(data.numOfCartItems )
    setBtnLoading(true)
    
  }


  }




  return (
    <>
      <div  className="col-md-2">
          <div className="product cursor-pointer text-center rounded-3 p-2">
         <Link to={'/product-details/'+ item._id }>
         <img src={item.imageCover} className='w-100' alt="" />
            <span className='text-main  fw-bold'>{item.category.name }</span><br/>
            <h5 className='my-2 fw-bold'>  {item.title.split(' ').slice(0,2).join(' ')} </h5>
            <div className='d-flex justify-content-between mt-3'>
              <div className='fw-bold'>
                {item.price} EGP
              </div>
              <div className='fw-bold'>
              <i class="fa-solid fa-star  rating-color"></i>
                {item.ratingsAverage}
              </div>
            </div>
         
         
         
         </Link>
         <div className='d-flex  justify-content-between align-items-center'>
         <button  disabled ={!btnLoading} onClick={() => (addProductToCart(item._id))} className='btn bg-main w-100 text-center text-white pt-3 '>
         {btnLoading ? 'Add To Box of Happines ' : 'Loading....'}
          
          </button>
         <i class="fa-solid fa-heart"></i>
         </div>
          
          </div>
        </div>
    </>
  )
}
