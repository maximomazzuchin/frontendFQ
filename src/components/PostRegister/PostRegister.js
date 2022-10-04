import React, {Component} from 'react';
import axios from 'axios';
import './PostRegister.css';
import ConfirmRegistration from './ConfirmRegistration';


class PostRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password1: '',
            password2: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }
    
    submitHandler = e => {
        e.preventDefault()
        if(document.getElementById('password').value !== document.getElementById('confirm_password').value){
            alert("Las contraseñas no son iguales");
            console.log(this.state)}
        else{
            console.log(this.state)
            document.getElementById('formm').style.display = 'none';
            document.getElementById('confirm-registration').style.display = 'flex';
            axios.post('http://127.0.0.1:8000/dj-rest-auth/registration/', this.state)
                .then(response => {
                    console.log(response.data)
                    console.log("----FUNCO----")
                    //window.location.replace("/Login");
                }).catch(err => {
                    console.log(err)
                    console.log("----ERROR----")

                })
        }
    }


    render() {
        const { first_name, last_name, email, password1, password2 } = this.state
        return (
            <div className="mainnn-divv">
                <form id="formm" className="formm" onSubmit={this.submitHandler}>
                    <label className="labeel">Registro</label>
                    <input className="inpuut" type="text" name="first_name" placeholder="Nombre" value={first_name} onChange={this.changeHandler} required></input>
                    <input className="inpuut" type="text" name="last_name" placeholder="Apellido" value={last_name} onChange={this.changeHandler} required></input>
                    <input className="inpuut" type="email" name="email" placeholder="Email" value={email} onChange={this.changeHandler} required></input>
                    <input className="inpuut" id="password" type="password" name="password1" placeholder="Contraseña" value={password1} onChange={this.changeHandler} required></input>
                    <input className="inpuut" id="confirm_password" type="password" name="password2" placeholder="Confirmar Contraseña" value={password2} onChange={this.changeHandler} required></input>
                    <button type="submit" href="#" className="btn-enviaar">Guardar</button>
                </form>
                <ConfirmRegistration/>
            </div>
        )
    }

}

export default PostRegister
