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
            <Card className="projectCard">
                <CardImg className ="" src="./img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle><h1>French Lick Winery</h1></CardTitle>
                    <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                    <Button>About The Project</Button>
                    <Button>View The Site</Button>
                </CardBody>
            </Card>
            <Card className="projectCard">
                <CardImg className ="" src="./img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle><h1>Spirits of French Lick</h1></CardTitle>
                    <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                    <Button>About The Project</Button>
                    <Button>View The Site</Button>
                </CardBody>
            </Card>
            <Card className="projectCard">
                <CardImg className ="" src="./img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle><h1>Replate</h1></CardTitle>
                    <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                    <Button>About The Project</Button>
                    <Button>View The Site</Button>
                </CardBody>
            </Card>
            <Card className="projectCard">
                <CardImg className ="" src="./img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle><h1>French Lick Winery</h1></CardTitle>
                    <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                    <Button>About The Project</Button>
                    <Button>View The Site</Button>
                </CardBody>
            </Card>
            <Card className="projectCard">
                <CardImg className ="" src="./img/flw_mockups.jpg" />
                <CardBody>
                    <CardTitle><h1>French Lick Winery</h1></CardTitle>
                    <CardSubtitle><p>HTML/CSS, JavaScript, SquareSpace</p></CardSubtitle>
                    <Button>About The Project</Button>
                    <Button>View The Site</Button>
                </CardBody>
            </Card>
        </Row>
    </Col>
    </div>
    );

}
export default WebProjects;