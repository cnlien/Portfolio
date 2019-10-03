import React from 'react';
import {Card, Button, CardImg, CardTitle, CardSubtitle, CardBody, Col, Row} from 'reactstrap';
import './projects.css';

const WebProjects = () => {
    return (
    <div className="projectContainer">
        <Col>
            <Row className="sectionHeader">
                <h1>Web</h1>
            </Row>

            <Row className="SkillIconContainer">
               <img className="skillIcon" src="./img/html5.svg" alt="html icon"/>
               <img className="skillIcon" src="./img/less.svg" alt="less icon"/>
               <img className="skillIcon" src="./img/css.svg" alt="css icon"/>
               <img className="skillIcon" src="./img/javascript.svg" alt="javascript icon"/>
               <img className="skillIcon" src="./img/react.svg" alt="react icon"/>
            </Row>

            <Row className="projects">
    
                {/*French Lick Winery Card Start*/}
                <Card className="projectCard">
                    <CardImg src="./img/flw_mockups.jpg" />
                    <CardBody>
                        <CardTitle><h1>French Lick Winery</h1></CardTitle>
                        <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                        <div className="projectButtons">
                            <Button>About The Project</Button>
                            <a href="http://www.frenchlickwinery.com"><Button>View The Site</Button></a>
                        </div>
                    </CardBody>
                </Card>
                {/*French Lick Winery Card End*/}

                {/*Spirits of French Lick Card Start*/}
                <Card className="projectCard">
                    <CardImg src="./img/sfl-mockups.jpg" />
                    <CardBody>
                       <CardTitle><h1>Spirits of French Lick</h1></CardTitle>
                       <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                       <div className="projectButtons">
                            <Button>About The Project</Button>
                            <a href="http://www.spiritsoffrenchlick.com"><Button>View The Site</Button></a>
                       </div>
                    </CardBody>
                </Card>
                {/*Spirits of French Lick Card End*/}

                {/*Replate Card Start*/}
                <Card className="projectCard">
                    <CardImg src="./img/iphoneMockUp.png" />
                    <CardBody>
                       <CardTitle><h1>Replate App</h1></CardTitle>
                       <CardSubtitle><p>HTML/CSS, Less, UI/UX</p></CardSubtitle>
                       <div className="projectButtons">
                            <Button>About The Project</Button>
                            <a href="https://build-weeks-replate.github.io/UI/"><Button>View The Site</Button></a>
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