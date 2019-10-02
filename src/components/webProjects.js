import React from 'react';
import {Card, Button, CardImg, CardTitle, CardSubtitle, CardBody, Col, Row} from 'reactstrap';
import './projects.css';

const WebProjects = (props) => {
    return (
    <div>
        <Col>
            <Row className="sectionHeader">
                <h1>Web</h1>
            </Row>

            <Row classNam="webProjects">

                {/*French Lick Winery Card Start*/}
                <Card className="projectCard">
                    <CardImg src="./img/flw_mockups.jpg" />
                    <CardBody>
                        <CardTitle><h1>French Lick Winery</h1></CardTitle>
                        <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                        <Button>About The Project</Button>
                        <Button>View The Site</Button>
                    </CardBody>
                </Card>
                {/*French Lick Winery Card End*/}

                {/*Spirits of French Lick Card Start*/}
                <Card className="projectCard">
                    <CardImg className ="" src="./img/sfl-mockups.jpg" />
                    <CardBody>
                       <CardTitle><h1>Spirits of French Lick</h1></CardTitle>
                       <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                       <Button>About The Project</Button>
                       <Button>View The Site</Button>
                    </CardBody>
                </Card>
                {/*Spirits of French Lick Card End*/}

                {/*Replate Card Start*/}
                <Card className="projectCard">
                    <CardImg className ="" src="./img/iphoneMockUp.png" />
                    <CardBody>
                       <CardTitle><h1>Replate App</h1></CardTitle>
                       <CardSubtitle><p>HTML/CSS, Less, UI/UX</p></CardSubtitle>
                       <div className="projectButtons">
                        <Button>About The Project</Button>
                        <Button>View The Site</Button>
                       </div>
                    </CardBody>
                </Card>
                {/*Replate Card End*/}

            </Row>
        </Col>
    </div>
    );

}
export default WebProjects;