import React from 'react';
import { Card, Button, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {

    return(
        <Card className="projectCard">
            <CardImg src={props.img} alt={props.project} />
            <CardBody>
            <CardTitle><h1>{props.project}</h1></CardTitle>

                <div className="projectButtons web-projects">
                    <Link to={props.projectlink}>
                        <Button>About The Project</Button>
                    </Link>

                    <a href={props.repositoryLink} target="_blank" rel="noopener noreferrer">
                        <Button className="project-url">View The Site</Button>
                    </a>
                </div>

                <div className="projectButtons design-projects">
                    <Link to={props.route}>
                        <Button>View These Projects</Button>
                    </Link>
                </div>


                <CardSubtitle><p>{props.stack}</p></CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;