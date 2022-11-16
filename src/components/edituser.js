import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import PatientHeader from './patientheader';
import './edituser.css'
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

class profileData{
    id = 0;
    nombre = '';
    apellido = '';
    correo = '';
    dni = '';
    ciudad = '';
    provincia = '';
    fechanac = '';
    nombre_tutor = '';
    apellido_tutor = '';
	osplan = '';
    idhi = '';
    obrasocial = '';

    constructor(id, nombre, apellido, correo, dni, ciudad, provincia, fechanac, nombre_tutor, apellido_tutor, osplan, idhi, obrasocial){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.dni = dni;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.fechanac = fechanac;
        this.nombre_tutor = nombre_tutor;
        this.apellido_tutor = apellido_tutor;
		this.osplan = osplan;
        this.idhi = idhi;
        this.obrasocial = obrasocial;
  }
}


export default function EditUser() {
	const [deita, setData] = useState([]);
	const history = useHistory();
	const initialFormData = Object.freeze({
		document_number: '',
        birth_date: '',
        province: '',
        city: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
    const [healthInsurances, setHealthinsurances] = useState([]);
    const [selectedHealthInsurance, setSelectedHealthInsurance] = useState([]);

	useEffect(() => {
		axiosInstance.get('api/users/full/'+localStorage.getItem('user_id')+'/')
			.then(res => {
			console.log(res.data[0])
			const dataMapped = res.data.map(x => {
				let incoming_data = new profileData(x.id, x.first_name, x.last_name, x.email, x.patient.document_number, x.patient.city, x.patient.province, x.patient.birth_date, x.tutor[0].first_name, x.tutor[0].last_name, x.health_insurance[0].description);
				localStorage.setItem('selected_healthinsurance_id', x.health_insurance[0].healthinsurance);
				return incoming_data;
			});
			setData(dataMapped);
			}).catch(err => {
			console.log(err)
			})
			axiosInstance.get('api/healthinsurances/'+localStorage.getItem('selected_healthinsurance_id')+'/')
				.then(res => {
					console.log(res.data)
					/* const hiMapped = res.data.map(x => {
						let hii = new axiHi(x.name)
						return hii;
					});
				setHi(hiMapped); */
				}).catch(err =>{
					console.log(err)
				})
	}, [])

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
			.put('api/patients/patients/', {
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
				axiosInstance.put('api/patients/tutors/', {
					first_name: formData.first_name,
                	last_name: formData.last_name,
					patient: localStorage.getItem('patient_id'),
				},).then((response => {
					console.log(response)
				}))
				axiosInstance.put('api/patients/certificates/', {
					image_binary: formData.image_binary,
					patient: localStorage.getItem('patient_id'),
				},).then((respo => {
					console.log(respo)
				}))
				axiosInstance.put('api/patients/healthinsurances/', {
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

    <div className="edituser">
		<PatientHeader />
		<video src={coverVideo} autoPlay loop muted className="vviide"/>
		<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Edita tu Perfil
				</Typography>
				<form className={classes.form} noValidate>
					{
						deita.map(e => (
							<Grid key={e.id} container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										id="first_name_tutor"
										label={"First Name Tutor: "+ e.nombre_tutor}
										type="text"
										name="first_name"
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										id="last_name_tutor"
										label={"Last Name Tutor: "+ e.apellido_tutor}
										type="text"
										name="last_name"
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										id="document_number"
										label={"DNI: "+ e.dni}
										type="number"
										name="document_number"
										autoComplete="document_number"
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										id="province"
										label={"Provincia: "+ e.provincia}
										type="text"
										name="province"
										onChange={handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										id="city"
										label={"Ciudad: "+ e.ciudad}
										type="text"
										name="city"
										onChange={handleChange}
									/>
								</Grid>
								<h3>Fecha de Nacimiento: {e.fechanac}</h3>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										id="birth_date"
										type="date"
										name="birth_date"
										onChange={handleChange}
									/>
								</Grid>
								<h3>Obra Social: {e.fechanac}</h3>
								<select placeholder="Obras Sociales" name="healthinsurance" onChange={handleChange}>
								{
									healthInsurances.map(insurance => (
										<option key={insurance.id} value={insurance.id}>{insurance.name}</option>
									))
								}
								</select>
								{selectedHealthInsurance && <Grid item xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										label={"Plan: "+ e.osplan}
										type="text"
										name="description"
										onChange={handleHealthInsuranceChange}
									/>
								</Grid>
								}
								<ImageCompressor onImageSelected={getData}/>
								<input type="hidden" name="image_binary" value={formData.image_binary}></input>
							</Grid>
						))
					}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Enviar
					</Button>
				</form>
			</div>
    </div>

  );
}

