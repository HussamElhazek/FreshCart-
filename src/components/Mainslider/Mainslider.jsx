import React from 'react'
import Slider from "react-slick";
import Slider1 from "../../assetes/images/2e299e90-97ef-443d-ab49-d880e19044bf.avif";
import Slider2 from "../../assetes/images/a4f4b458-c1f1-424c-aa1f-fd5bd2a8d41f.avif";
import Slider3 from "../../assetes/images/en_dk_uae-hero-01 (29).1707381757.2857506.avif";

export default function Mainslider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000
 
  };
  return (
    <div className='contanier'>
    <Slider {...settings}>
    <img src={Slider1} alt="" />
    <img src={Slider2} alt="" />
    <img src={Slider3} alt="" />
    </Slider>
    </div>
  )
}
