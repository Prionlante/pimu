import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Picture1 from '../assets/pic1.jpg'
import Picture2 from '../assets/pic2.jpg'

import '../style.css'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        class="img-fluid"
                        className="d-block w-100"
                        src={Picture1}
                        alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture2}
                        class="img-fluid"
                        alt=""
                    />
                </Carousel.Item>

            </Carousel>
        )
    }
}
