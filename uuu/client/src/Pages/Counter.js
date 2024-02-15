import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './style.css'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            data: null,
            isLoggedIn: false,
        };  
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios.get("https://phsst.onrender.com/api/history/get", { 
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
        }).then((res)=> {
            const data = res.data.data
            console.log(data)
            this.setState({data: data.reverse()})
        })
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.state.code=='secretkey'){
            this.setState({isLoggedIn: true})
        }
    }

    render() {
        return (
            <>
            {!this.state.isLoggedIn ? 
                <div className="Auth-form-container">
                    <form className="Auth-form" onSubmit={this.onSubmit}>
                        <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Вход</h3>
                        <div className="form-group mt-3">
                            <label>Код</label>
                            <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(evt)=>this.setState({code: evt.target.value})}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                            Войти
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
                :
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Всего: {this.state.data.length} входов</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Статус</th>
                        <th>Наименование учебного/медицинского учреждения</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item)=>{
                            const names = ["", "Школьник", "Студент", "Учитель", "Преподаватель", "Медицинский работник", "Другое"]
                            return (
                                <tr>
                                    <td></td>
                                    <td>{item.surname}</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{names[item.status]}</td>
                                    <td>{item.work}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            }
            </>
        )
    }
}