import * as React from 'react';
import './Register.css';
import PostRegister from '../components/PostRegister/PostRegister';
import coverVideo from '../media/coverVideo.mp4';


function App() {
  return (
    <div className="Register">
      <video className='videeo' src={coverVideo} autoPlay loop muted/>
      <PostRegister />
    </div>
  );
}

export default App;
