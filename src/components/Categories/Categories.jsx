import axios from 'axios'


import React, { useState , useEffect } from 'react'
import Slider from "react-slick";


export default function Categories() {

  const [categories, setCategories] =useState([]);
 async function getCategories(){
 let{ data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories/')
  setCategories(data.data)
  console.log(data.data);

  }
  useEffect(()=>{
    getCategories()
  },[])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000
 
  };
  return (
    <div className='my-3 container'>
      <h3>show popular categories</h3>
    <Slider {...settings}>
 {
  categories.map((item)=>(
   <div className="px-1">
     <img src={item.image} className='w-100' height={200} alt="" />
     <h5>{item.name}</h5>
   </div>
  ))
 }
    </Slider>
    </div>
  )
}
