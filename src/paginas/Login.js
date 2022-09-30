import './Login.css';
import coverVideo from '../media/coverVideo.mp4';
import PostLogin from '../components/PostLogin/PostLogin';

function App(props) {
  return (
    <div className='Login'>
      <video className='videeo' src={coverVideo} autoPlay loop muted/>
      <PostLogin />
    </div>
  );
}

export default App;
