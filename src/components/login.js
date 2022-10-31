import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css'
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import coverVideo from '../media/coverVideo.mp4';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '70%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);

		await axiosInstance
			.post('dj-rest-auth/login/', {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				//debugger;
				localStorage.setItem('access_token', res.data.access_token);
				localStorage.setItem('refresh_token', res.data.refresh_token);
				localStorage.setItem('user_id', res.data.user.pk);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				//hacer .get aca
				//then y catch
				//en el then evaluar si el valor que viene en patient id es null o hay un id
				//si hay id mandar al home, si no hay, mandar al create patient
				/*axios.get('http://127.0.0.1:8000/api/users/testfull/', {
					headers: {
						Authorization: localStorage.getItem('access_token')
							? 'JWT ' + localStorage.getItem('access_token')
							: null,
						'Content-Type': 'application/json',
						accept: 'application/json',
					} 
				}).then(res => {
					console.log(res.data)*/
					//if (res.data.patient ==) null){
					//	history.push('/createpatient');
					//}else
					//	history.push('/');
				/*}).catch(err => {
					console.log(err)
				});*/
				history.push('/createpatient');
				//history.push('/');
				//console.log(res);
				//console.log(res.data);
			});
	};

	const classes = useStyles();

	return (
		<div className="SignIn">
			<video src={coverVideo} autoPlay loop muted className="videoo"/>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						type="email"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="/forgotpassword" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="register" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</div>
	);
}