import React from 'react';
import {Card, Button, CardImg, CardTitle, CardSubtitle, CardBody, Col, Row} from 'reactstrap';
import './projects.scss';

const DesignProjects = () => {
    return (
    <div className="projectContainer">
        <Col>
            <Row className="sectionHeader">
                <h1>Design</h1>
            </Row>

            <Row className="skillIconContainer">
               <img className="skillIcon" src="./img/xd.svg" alt="xd icon"/>
               <img className="skillIcon" src="./img/illustrator.svg" alt="illustrator icon"/>
               <img className="skillIcon" src="./img/photoshop.svg" alt="photoshop icon"/>
               <img className="skillIcon" src="./img/indesign.svg" alt="indesign icon"/>
               <img className="skillIcon" src="./img/dimension.svg" alt="dimension icon"/>
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
                    <CardImg className ="" src="./img/sfl-mockups.jpg" />
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
                    <CardImg className ="" src="./img/iphoneMockUp.png" />
                    <CardBody>
                       <CardTitle><h1>Replate App</h1></CardTitle>
                       <CardSubtitle><p>HTML/CSS, Less, UI/UX</p></CardSubtitle>
                       <div className="projectButtons">
                            <Button>About The Project</Button>
                            <a href="https://cnlien.github.io/Replate-UI/"><Button>View The Site</Button></a>
                       </div>
                    </CardBody>
                </Card>
                {/*Replate Card End*/}

            </Row>
        </Col>
    </div>
    );
}
export default DesignProjects;