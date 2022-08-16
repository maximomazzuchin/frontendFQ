import React from 'react'
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import slides from '../slider/Slides';
import "./Slider.css"


export const Slider  = () => {
  return (

    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>Formularios y Donaciones</h2>
        </div>
        <Carousel slide={false} fade={false}
            plugins={['arrows']}
            slidesPerPage={4}
            infinite
            animationSpeed={200}
            center
            offset={50}
            itemWidth={400}
            slides = {slides}
        />
    </div>
  )
}
