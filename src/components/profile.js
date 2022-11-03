import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PatientHeader from './patientheader';
import axiosInstance from '../axios';
import coverVideo from '../media/coverVideo.mp4';
import './profile.css';


class axiVisits{
    id = 0;
    nombre = '';
    apellido = '';
    correo = '';
    dni = '';
    ciudad = '';
    provincia = '';
    fechanac = '';
    idhi = '';
    obrasocial = '';
    osplan = '';

    constructor(id, nombre, apellido, correo, dni, ciudad, provincia, fechanac, idhi, obrasocial, osplan){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.dni = dni;
    this.ciudad = ciudad;
    this.provincia = provincia;
    this.fechanac = fechanac;
    this.idhi = idhi;
    this.obrasocial = obrasocial;
    this.osplan = osplan;
  }
}

function Profile() {

  const [visits, setVisits] = useState([]);


  useEffect(() => {
    axiosInstance.get('api/users/full/'+localStorage.getItem('user_id')+'/')
        .then(res => {
        console.log(res.data[0])
        const visitsMapped = res.data.map(x => {
            let visit = new axiVisits(x.id, x.first_name, x.last_name, x.email, x.patient.document_number, x.patient.city, x.patient.province, x.patient.birth_date);
            localStorage.setItem('selected_healthinsurance_id', x.health_insurance[0].healthinsurance);
            return visit;
        });
        setVisits(visitsMapped);
        }).catch(err => {
        console.log(err)
        })
        axiosInstance.get('api/healthinsurances/'+localStorage.getItem('selected_healthinsurance_id')+'/')
            .then(res => {
                console.log(res.data)
        })
  }, [])


  /* useEffect(() => {
    axiosInstance.get('api/healthinsurances/'+localStorage.getItem('selected_healthinsurance_id')+'/')
        .then(res => {
            console.log(res.data)
        })
  }, [])
 */

  return (

    <div className="profile">
        <PatientHeader />
        <video src={coverVideo} autoPlay loop muted className="viide"/>
        {
            visits.map(e => (
                <div className="main-div" key={e.id}>
                    <div>
                        <h4>Nombre: {e.nombre}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                    <div>
                        <h4>Apellido: {e.apellido}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                    <div>
                        <h4>Email: {e.correo}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                    <div>
                        <h4>DNI: {e.dni}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                    <div>
                        <h4>Fecha de Nacimiento: {e.fechanac}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                    <div>
                        <h4>Provincia: {e.provincia}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                    <div>
                        <h4>Ciudad: {e.ciudad}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                    <div>
                        <h4>Obra Social: {e.hi_name}</h4>
                        <button>Editar</button>
                        <button>Borrar</button>
                    </div>
                </div>
            ))
        }
        

    </div>

  );
}

export default Profile;
