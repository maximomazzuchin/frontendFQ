import React from 'react'
import "../slider/Slider"


export const slidesInfo = [
    {
        
        alt: "Project 1",
        desc: "Formulario" 
    },
    {

        alt: "Project 2",
        desc: "Donaciones" 
    },
    {
     
        alt: "Project 3",
        desc: "Medicamentos"
     
    },
    {
        src: "https://images.unsplash.com/photo-1640622661329-67f406a77d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Project 4",
        desc: "Formulario de alcohol" 
    },
    {
        src: "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        alt: "Project 5",
        desc: "Base de datos"
    }
]


const slides = slidesInfo.map(slide => (
    <div className='slide-container'>
        <img src = {slide.src} alt={slide.alt}/>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))


export default slides;