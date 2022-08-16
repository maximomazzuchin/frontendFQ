import React from 'react'
import "../slider/Slider"

export const slidesInfo = [
    {
        src: "https://images.unsplash.com/photo-1656524489031-71c0be0fb205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Project 1",
        desc: "Formulario" 
    },
    {
        src: "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
        alt: "Project 2",
        desc: "Donaciones" 
    },
    {
        src: "https://images.unsplash.com/photo-1656524489358-21713cae15f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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