import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import './register.css';
import Header from '../headers/header';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import coverVideo from '../../media/coverVideo.mp4';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '50%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 1),
	},

}));


export default function SignUp() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		first_name: '',
		last_name: '',
		email: '',
		password1: '',
		password2: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if(document.getElementById('password1').value !== document.getElementById('password2').value){
            alert("Las contraseñas no son iguales");
            console.log(this.state)}
		else if(document.getElementById('fm').value === "" || document.getElementById('lm').value === "" || document.getElementById('rmail').value === ""){
			alert("Faltan datos");
		}
		else {
			//document.getElementById('mf').style.display = 'none';
			axios.post('http://127.0.0.1:8000/dj-rest-auth/registration/', {
				first_name: formData.first_name,
				last_name: formData.last_name,
				email: formData.email,
				password1: formData.password1,
				password2: formData.password2,
			}).then((res) => {
				console.log(res);
				console.log(res.data);
				toast.success('Verifica tu Correo', {
					position: "top-center",
					autoClose: 10000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: "light",
				});
				//alert("Verifica tu correo para confirmar la cuenta")
				//history.push('/login');
			}).catch(err => {
				toast.error('Algo ha ocurrido, porfavor intente nuevamente', {
					position: "top-center",
					autoClose: 10000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: "dark",
				});
				console.log(err)
				//console.log(err.response.data.email)
			})
		}
	};

	const classes = useStyles();

	return (
		<div className="SignUp">
			<Header />
			<video src={coverVideo} autoPlay loop muted className="vide"/>
			<CssBaseline />
			<div id="mf" className={classes.paper}>
				<Avatar className={classes.avatar} id="avid"></Avatar>
				<Typography className="signup" component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="First_Name"
								type="text"
								name="first_name"
								className="grid-item"
								id="fm"
								autoComplete="first_name"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="Last_Name"
								type="text"
								name="last_name"
								className="grid-item"
								id="lm"
								autoComplete="last_name"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="Email Address"
								type="email"
								name="email"
								className="grid-item"
								id="rmail"
								autoComplete="email"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password1"
								className="grid-item"
								label="Password"
								type="password"
								id="password1"
								autoComplete="current-password"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password2"
								className="grid-item"
								label="Password"
								type="password"
								id="password2"
								autoComplete="current-password"
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
}