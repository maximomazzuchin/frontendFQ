import React, { useEffect } from 'react'
import videoBG from '../media/new-bg-2.mp4'
import './Home.css'
export function Home() {
  const url = "http://10.20.19.58:8000/api/products/?format=json"
  const fetchApi = async () =>{
    const response = await fetch(url)
    console.log(response.status)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return <div className='home'>
    
    <video src= {videoBG} autoPlay loop muted/>
    </div>
}
