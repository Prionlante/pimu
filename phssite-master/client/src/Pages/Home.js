import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Card, CardDeck, Container, Button } from 'react-bootstrap'
import logo from "../assets/a.png"

export default class Home extends Component {
    render() {
        return (
        <>
            <CarouselBox />

            <Container>
                <h2 className="text-center m-4"> ЧУТЬ-ЧУТЬ ИНТЕРЕСНОГО</h2>
                <CardDeck className="m-4">
                    <Card>
                        <Card.Img 
                            variant="top"
                            src={logo}
                        />
                        <Card.Body>
                            <Card.Title> НАГРАДЫ </Card.Title>
                            <Button variant="primary" href="/about#diplomas"> СМОТРЕТЬ </Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title> МАТЕРИАЛЫ </Card.Title>
                            <Button variant="primary" href="/materials"> СМОТРЕТЬ </Button> 
                        </Card.Body>
                        <Card.Img 
                            variant="bottom"
                            src='https://images.pexels.com/photos/1517355/pexels-photo-1517355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                    </Card>

                </CardDeck>
            </Container>
        </>
        )
    }
}
