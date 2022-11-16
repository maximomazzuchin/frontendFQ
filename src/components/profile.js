import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PatientHeader from './patientheader';
import axiosInstance from '../axios';
import coverVideo from '../media/coverVideo.mp4';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import './profile.css';


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

    constructor(id, nombre, apellido, correo, dni, ciudad, provincia, fechanac, nombre_tutor, apellido_tutor, idhi, obrasocial, osplan){
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

class axiHi{
    hi_name = '';

    constructor(hi_name){
        this.hi_name = hi_name;
  }
}

function Profile() {

  const [deita, setData] = useState([]);


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

  return (

    <div className="profile">
        <PatientHeader />
        <video src={coverVideo} autoPlay loop muted className="viide"/>
        {
            deita.map(e => (
                <form className="main-div" key={e.id}>
                    <Grid container spacing={2}>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="text"
                            label={"Nombre: "+e.nombre}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="text"
                            label={"Apellido: "+e.apellido}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="mail"
                            label={"E-mail: "+e.correo}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="number"
                            label={"DNI: "+e.dni}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="text"
                            label={"Provincia: "+e.provincia}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="text"
                            label={"Ciudad: "+e.ciudad}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="text"
                            label={"Fecha de Nacimiento: "+e.fechanac}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="text"
                            label={"Nombre Tutor: "+e.nombre_tutor}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                            variant="outlined"
                            type="text"
                            label={"Apellido Tutor: "+e.apellido_tutor}
                            />
                        </Grid>
                        <Button
                            href="#"
                            color="primary"
                            variant="outlined"
                            component={NavLink}
                            to="/edituser"
                        >
                            Editar tu Perfil
					    </Button>
                    </Grid>
                </form>
            ))
        }
    </div>

  );
}

export default Profile;
