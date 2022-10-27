import React, {useEffect} from 'react';
import './profile.css';
import coverVideo from '../media/coverVideo.mp4';
import axiosInstance from '../axios';
import axios from 'axios';

function Profile() {
	
    useEffect(() => {
        axios.get('', {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                        ? 'JWT ' + localStorage.getItem('access_token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                }
            })
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])





	return (
		<div className="profile">
			<video src={coverVideo} autoPlay loop muted className="vide"/>
		</div>
	);
}
export default Profile;