/*import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import './PostRegister.css';
import coverVideo from '../../media/coverVideo.mp4';*/

/*
class PostRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            
        }
    }

    changeHandler = (e) => {2
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
        const { first_name, last_name } = this.state
        return (
            <div className="mainn-divv">
                <form className="form" onSubmit={this.submitHandler}>
                    <label className="label">Registro</label>
                    <input className="input" type="text" name="first_name" placeholder="Nombre" value={first_name} onChange={this.changeHandler}></input>
                    <input className="input" type="text" name="last_name" placeholder="Apellido" value={last_name} onChange={this.changeHandler}></input>
                    <input className="input" type="email" name="mail" placeholder="Email" onChange={this.changeHandler}></input>
                    <button type="submit" href="#" className="btn-enviar">Enviar</button>
                </form>
            </div>
        )
    }

}

export default PostRegister
*/