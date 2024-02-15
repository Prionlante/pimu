import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';
import { 
    Container, 
    Nav, 
    Navbar 
} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import logo from './logo.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Materials from '../Pages/Materials';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration'
import Cookies from 'universal-cookie';
import Counter from '../Pages/Counter';

export default class Header extends Component {
    
    render() {
        const cookies = new Cookies();
        let loggedIn = false
        if(cookies.get('token')){
            loggedIn = true
        }
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>

                        <Navbar.Brand href="/">
                            <img
                                src = {logo}
                                height="40"
                                width="30"
                                className="d-inline-block align-top" 
                                alt="Logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> ГЛАВНАЯ </Nav.Link>
                                <Nav.Link href="/about"> ОБО МНЕ </Nav.Link>
                                {loggedIn && <Nav.Link href="/materials/all"> МАТЕРИАЛЫ </Nav.Link>}
                                {loggedIn && <Nav.Link href="/materials/upgradeKurses" >Курсы повышения квалификации</Nav.Link>}
                            </Nav>
                            {loggedIn ? <Button href="/" onClick={cookies.remove('token')}>Выйти</Button> : <Button href="/login">Войти</Button>}
                            {/* поиск */}
                            {/* <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="mr=sm-2"
                                />
                                <Button variant="outline-info"> НАЙТИ </Button>
                            </Form> */}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} /> 
                        <Route exact path="/materials/:tab" component={Materials} /> 
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/registration" component={Registration}></Route>
                        <Route exact path="/counter" component={Counter}></Route>
                    </Switch>
                </Router> 
            </>
        )
    }
}