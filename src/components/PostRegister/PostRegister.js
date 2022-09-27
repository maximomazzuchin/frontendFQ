import React, {useState, useEffect} from 'react';
import './PostRegister.css';
import axios from 'axios';


class VisitaGuiada{
  id = 0;
  nombre = '';

  constructor(id, nombre){
    this.id = id;
    this.nombre = nombre;
  }
}

function PostRegister() {

  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    axios.get('')
    .then(res => {    
      console.log(res.data)
      const visitasMapped = res.data.map(x => {
        let visita = new VisitaGuiada(x.id, x.name);
        return visita;
      });

      setVisitas(visitasMapped);
    }).catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="VisitasGuiadas">
        <h1 className="main-title">Visitas</h1>
        <div className="main-div">
          {
            visitas.map(visita => (
              <div key={visita.id}>
                <img src={visita.imageurl} className="img-div"></img>
                <div className="about-div">
                  <h3 className="h">Nombre de la Visita: {visita.tema}</h3>
                <div className="circle-div">
                  <div className="circle"></div>
                  <h6 className="first-h">Encargado: {visita.encargadofn} {visita.encargadoln}</h6>
                </div>
                <h6 className="second-h">Idioma de la visita: {visita.idiomas}</h6>
                <h6 className="third-h">Fecha y horario: {visita.fecha}</h6>
                <h6 className="fourth-h">Espacios disponibles: {visita.cantvisitas}</h6>
                <div className="buttons-div">
                  <a className="btn-ins" href="/Inscripcion?visita_id={visita.id}">Inscribirme</a>
                  <a className="btn-rec" href="#">Recorrido</a>
                </div>
              </div>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default PostRegister