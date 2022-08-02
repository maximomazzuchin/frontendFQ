import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";


export const COVER = () => {
  return <div className='cover-container'>
     <video className='video' src={coverVideo} autoPlay loop muted/>
      <h1>FQ Córdoba</h1>
    </div>

}
