import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeCard from "./homeCard"
import { homeData } from "../../dummyData"

const SampleNextArrow = (props) => {

  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
         <i className="fas fa-caret-right"></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className="fas fa-caret-left"></i>
      </button>
    </div>
  )
}
const Home = () => {

  const [items, setItem] = useState(homeData)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  
  return (
      <div className='homeContainer'>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <HomeCard key={item.id} item={item} />
            )
          })}
        </Slider>
      </div>
  )
}

export default Home
