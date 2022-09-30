import React, {Component} from 'react';
import axios from 'axios';
import './PostRegister.css';


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
        console.log(this.state)
        axios.post('', this.state)
            .then(response => {
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        const { first_name, last_name, email, password1, password2 } = this.state
        return (
            <div className="mainnn-divv">
                <form className="formm" onSubmit={this.submitHandler}>
                    <label className="labeel">Registro</label>
                    <input className="inpuut" type="text" name="first_name" placeholder="Nombre" value={first_name} onChange={this.changeHandler} required></input>
                    <input className="inpuut" type="text" name="last_name" placeholder="Apellido" value={last_name} onChange={this.changeHandler} required></input>
                    <input className="inpuut" type="email" name="email" placeholder="Email" value={email} onChange={this.changeHandler} required></input>
                    <input className="inpuut" type="password" name="password1" placeholder="Contraseña" value={password1} onChange={this.changeHandler} required></input>
                    <input className="inpuut" type="password" name="password2" placeholder="Confirmar Contraseña" value={password2} onChange={this.changeHandler} required></input>
                    <button type="submit" href="#" className="btn-enviaar">Guardar</button>
                </form>
            </div>
        )
    }

}

export default PostRegister
