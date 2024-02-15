import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import './style.css'
import { Redirect } from 'react-router';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };  
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post("https://phsst.onrender.com/api/user/login", {email: this.state.email, password: this.state.password}, { 
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
        }).then((res)=>{
            const cookies = new Cookies();
            cookies.set('token', res.token, { path: '/' });
            window.location.href = '/'
        })

    }


    render() {
        const cookies = new Cookies();
        if(cookies.get('token')){
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={this.onSubmit}>
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Вход</h3>
                    <div className="form-group mt-3">
                        <label>Почта</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        onChange={(evt)=>this.setState({email: evt.target.value})}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Пароль</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        onChange={(evt)=>this.setState({password: evt.target.value})}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                        Войти
                        </button>
                    </div>
                    <div>
                        Нет аккаунта? <a href="/registration">Зарегистрируйтесь!</a>
                    </div>
                    </div>
                </form>
            </div>
        )
    }

}