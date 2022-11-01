import React, {useEffect} from 'react';
import './profile.css';
import coverVideo from '../media/coverVideo.mp4';
import axiosInstance from '../axios';
import Modal from './modal';

function Profile() {	
    useEffect(() => {
        axiosInstance.get('')
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])





	return (
		<div className="profile">
            <Modal />
			<video src={coverVideo} autoPlay loop muted className="vide"/>
		</div>
	);
}
export default Profile;