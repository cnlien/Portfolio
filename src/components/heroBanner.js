import React from 'react';
import './heroBanner.css';
import { Row, Container } from 'reactstrap';

const HeroBanner = () => {
    return (
    <Container>
        <Row><img className="mainImage" src="./img/250x250.png" alt="Pic of Chris"/></Row>
        <h1>Hello World!</h1>
    </Container>

    )
}

export default HeroBanner