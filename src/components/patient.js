import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import PatientHeader from './patientheader';
import { Buffer } from 'buffer';
import './patient.css'
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageCompressor from './ImageCompressor';
import coverVideo from '../media/coverVideo.mp4';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(6),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '50%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(2, 0, 1),
	},
}));

export default function CreatePatient() {
	const history = useHistory();
	const initialFormData = Object.freeze({
		document_number: '',
        birth_date: '',
        province: '',
        city: '',
	});

	useEffect(() => {
		axiosInstance.get('api/users/full/'+localStorage.getItem('user_id')+'/')
			.then(res => {
				const redirect = res.data[0].patient
				if (redirect != null){
					history.push('/')
				}
			})
	}, [])

	/* useEffect(() => {
		axiosInstance.get('api/users/full/'+localStorage.getItem('user_id')+'/')
			.then(res => {
				const redirect = res.data[0].patient
				if (redirect != null){
					history.push('/')
				}
			})
	}, []) */

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
								className="griid-item"
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
								className="griid-item"
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
								className="griid-item"
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
								className="griid-item"
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
								className="griid-item"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid id="birthda" item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="birth_date"
                                type="date"
								name="birth_date"
								className="griid-item"
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
                        {selectedHealthInsurance && <Grid id="oss" item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								placeholder="Plan Obra social"
                                type="text"
								name="description"
								className="griid-item"
								onChange={handleHealthInsuranceChange}
							/>
						</Grid>
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
				</form>
			</div>
		</div>
	);
}