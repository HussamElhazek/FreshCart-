import axios from 'axios';
import React, { useContext, useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { storeContext } from '../../context/storeContext';

export default function ProductDetails() {

  let {counter , setCounter } =  useContext(storeContext)
    
   let x = useParams()
   console.log(x);
   let [product, setProduct] = useState({}) 
   let [loading, setLoading] = useState(true)
   async function getProduct(){
    let { data } =  await axios.get (`https://ecommerce.routemisr.com/api/v1/products/${x.id}`);
    setProduct(data.data)
    setLoading(false)
   }

   useEffect(()=>{
       getProduct();
   },[])

   if(loading) return <loading/>
  return (

    <div>
      <div className="container">
        <div className="row mt-4">
            <div className="col-md-3">
                <img src={product.imageCover} alt="" className='w-100'/>
            </div>
            <div className="col-md-9">
                <h4>{product.title}</h4>
                <p className='my-3 fw-bold'>{product.description}</p>
                <span className='text-center fw-bold'>{product.category.name}</span>
                <div>
                    <div className='d-flex justify-content-between mt-4' >
                        <div className='fw-bold d-flex justify-content-between'>
                         {product.price} EGP
              </div>  
              <div className='fw-bold'>
              <i class="fa-solid fa-star  rating-color"></i>
                {product.ratingsAverage}
              </div>   
                    </div>
                </div>
                <button onClick={()=> setCounter (counter + 1)}  className='btn bg-main text-white w-100 ms-auto my-2'>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

