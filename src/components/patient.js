import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import PatientHeader from './patientheader';
import './patient.css'
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
import ImageCompressor from './ImageCompressor';
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
		width: '50%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function CreatePatient() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		document_number: '',
        birth_date: '',
        province: '',
        city: '',
		//patient: localStorage.getItem('patient_id'),
        //selectedInsurance: '',
        //description: '',
        //first_name_tutor: '',
        //last_name_tutor: '',
        //udimage: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
    const [healthInsurances, setHealthinsurances] = useState([]);
    const [selectedHealthInsurance, setSelectedHealthInsurance] = useState([]);

    useEffect(() => {
        axiosInstance.get('api/healthinsurances/')
            .then(res => {
                console.log(res.data)
                setHealthinsurances(res.data)
                /*this.context.setUser(res.data)
                this.setState({
                    ...this.state,
                    insuranceList:res.data
                })*/
            }).catch(err => {
                console.log(err)
            })
    }, [])

	useEffect(() => {
		axiosInstance.get('api/users/full/'+localStorage.getItem('user_id')+'/')
			.then(res => {
				const redirect = res.data[0].patient
				if (redirect != null){
					history.push('/')
				}
			})
	}, [])

    const getData = (baseImage) => {
        //console.log(baseImage)
		const strImage = baseImage.replace(/^data:image\/[a-z]+;base64,/, "");
        updateFormData({
            ...formData,
            image_binary:strImage
        })

    };

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

    const handleHealthInsuranceChange = (e) => {
        updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
    };

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post('api/patients/patients/', {
                document_number: formData.document_number,
                birth_date: formData.birth_date,
                province: formData.province,
                city: formData.city,
				user: localStorage.getItem('user_id'),
			},)
			.then((res) => {
				//history.push('/');
				console.log(res);
				localStorage.setItem('patient_id', res.data.id);
				//console.log(res.data.id);
				axiosInstance.post('api/patients/tutors/', {
					first_name: formData.first_name,
                	last_name: formData.last_name,
					patient: localStorage.getItem('patient_id'),
				},).then((response => {
					console.log(response)
				}))
				axiosInstance.post('api/patients/certificates/', {
					image_binary: formData.image_binary,
					patient: localStorage.getItem('patient_id'),
				},).then((respo => {
					console.log(respo)
				}))
				axiosInstance.post('api/patients/healthinsurances/', {
					description: formData.description,
					patient: localStorage.getItem('patient_id'),
					healthinsurance: formData.healthinsurance,
				},)
				.then((respons => {
					console.log(respons)
					history.push('/');
				}))
			}).catch(err => {
				console.log(err)
			});
	};

	const classes = useStyles();

	return (
		<div className="CreatePatient">
			<PatientHeader />
			<video src={coverVideo} autoPlay loop muted className="videeo"/>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Paciente
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="first_name_tutor"
								label="First Name Tutor"
                                type="text"
								name="first_name"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="last_name_tutor"
								label="Last Name Tutor"
                                type="text"
								name="last_name"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="document_number"
								label="Document Number"
                                type="number"
								name="document_number"
								autoComplete="document_number"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="province"
								label="Provincia"
                                type="text"
								name="province"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="city"
								label="Ciudad"
                                type="text"
								name="city"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="birth_date"
                                type="date"
								name="birth_date"
								onChange={handleChange}
							/>
						</Grid>
                        <select placeholder="Obras Sociales" name="healthinsurance" onChange={handleChange}>
                        {
                            healthInsurances.map(insurance => (
                                <option key={insurance.id} value={insurance.id}>{insurance.name}</option>
                            ))
                        }
                        </select>
                        {selectedHealthInsurance && <input type="text" name="description" placeholder="Plan Obra social" onChange={handleHealthInsuranceChange}></input>
                        }
                        <ImageCompressor onImageSelected={getData}/>
                        <input type="hidden" name="image_binary" value={formData.image_binary}></input>
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
		</div>
	);
}