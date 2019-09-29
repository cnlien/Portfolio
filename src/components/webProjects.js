import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText,CardSubtitle, CardBody, Row, Col} from 'reactstrap';

const WebProjects = () => {
    return (
    <Row>
        <Col sm="4">
            <Card className="projectCard">
                <CardImg src="./img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                    <CardText>some text for the card if you want. Hell keep writing just to see how long this gets. </CardText>
                    <Button>Button Text</Button>
                </CardBody>
            </Card>
        </Col>

        <Col sm="4">
            <Card className="projectCard">
                <CardImg src="../img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                    <CardText>some text for the card if you want. Hell keep writing just to see how long this gets. </CardText>
                    <Button>Button Text</Button>
                </CardBody>
            </Card>
        </Col>

        <Col sm="4">
            <Card className="projectCard">
                <CardImg src="../img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                    <CardText>some text for the card if you want. Hell keep writing just to see how long this gets. </CardText>
                    <Button>Button Text</Button>
                </CardBody>
            </Card>
        </Col>
    </Row>
    );
}
export default WebProjects;