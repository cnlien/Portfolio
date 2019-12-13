import React from 'react';
import { Card, Button, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const ProjectCard = (props) => {

    return(
        <Card className="projectCard">
            <CardImg src={props.img} alt={props.project} />
            <CardBody>
                <div className="projectButtons">
                    <Button>About The Project</Button>
                    <a href={props.url} target="_blank" rel="noopener noreferrer"><Button>View The Site</Button></a>
                </div>
                <CardTitle><h1>{props.project}</h1></CardTitle>
                <CardSubtitle><p>{props.stack}</p></CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;