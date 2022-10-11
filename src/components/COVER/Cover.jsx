import React from 'react'
import "./Cover.css";
import coverVideo from "../../../public/imgs/coverVideo.mp4";


export const COVER = () => {
  return (
    <>
      <video className='video' src={coverVideo} autoPlay loop muted/>
      <div className='cover-container'>
        <div className='covercontent'>
          <h1 className='covertitle'>Córdoba FQ</h1>
        </div>
      </div>
    </>
  );

}

export default COVER;