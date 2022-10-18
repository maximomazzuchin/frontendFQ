import React, {Component} from 'react';
import axios from 'axios';
import './PostLogin.css';


class PostLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }    

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }
    
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/dj-rest-auth/login/', this.state)
            .then(response => {
                console.log(response.data)
                //window.location.replace("/");
            }).catch(err => {
                console.log(err)
                alert("Contraseña o Mail invalidos, porfavor intente nuevamente.")
            })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="mainn-divv">
                <form className="form" onSubmit={this.submitHandler}>
                    <label className="label">Login</label>
                    <input className="input" type="email" name="email" placeholder="Email" value={email} onChange={this.changeHandler} required></input>
                    <input className="input" type="password" name="password" placeholder="Contraseña" value={password} onChange={this.changeHandler} required></input>
                    <button type="submit" href="#" className="btn-enviar">Entrar</button>
                    <a href="/register" class="btn btn-link" role="button">Registrarse</a>
                </form>
            </div>
        )
    }

}

export default PostLogin;
