import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';
import axios from 'axios'
import './style.css'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            surname: "",
            name: "",
            lastname: "", 
            status: 0,
            work: "",
        };  
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post("https://phsst.onrender.com/api/user/register", 
        {
            email: this.state.email, 
            password: this.state.password,
            surname: this.state.surname,
            name: this.state.name,
            lastname: this.state.lastname,
            status: this.state.status,
            work: this.state.work
        }, { 
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
                    <h3 className="Auth-form-title">Регистрация</h3>
                    <div className="form-group mt-3">
                        <label>Почта</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Введите почту"
                        onChange={(evt)=>this.setState({email: evt.target.value})}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Пароль</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Введите пароль"
                        onChange={(evt)=>this.setState({password: evt.target.value})}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Фамилия</label>
                        <input
                        type="surname"
                        className="form-control mt-1"
                        placeholder="Введите фамилию"
                        onChange={(evt)=>this.setState({surname: evt.target.value})}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Имя</label>
                        <input
                        type="name"
                        className="form-control mt-1"
                        placeholder="Введите имя"
                        onChange={(evt)=>this.setState({name: evt.target.value})}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Отчество</label>
                        <input
                        type="lastname"
                        className="form-control mt-1"
                        placeholder="Введите отчество"
                        onChange={(evt)=>this.setState({lastname: evt.target.value})}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Статус</label>
                        <Form.Control as="select" onChange={(evt)=>this.setState({status: evt.target.value})}>
                            <option>Выберите вариант:</option>
                            <option value="1">Школьник</option>
                            <option value="2">Студент</option>
                            <option value="3">Учитель</option>
                            <option value="4">Преподаватель</option>
                            <option value="5">Медицинский работник</option>
                            <option value="6">Другое</option>
                        </Form.Control>
                    </div>
                    
                    <div className="form-group mt-3">
                        <label>Название учебного/медицинского учреждения</label>
                        <input
                        type="name"
                        className="form-control mt-1"
                        placeholder="Введите название"
                        onChange={(evt)=>this.setState({work: evt.target.value})}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Зарегистрироваться
                        </button>
                    </div>
                    <div>
                        Есть аккаунт? <a href="/login">Войдите!</a>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}