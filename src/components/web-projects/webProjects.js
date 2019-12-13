import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import '../projects.scss';

import data from './webProjData';

import ProjectCard from '../ProjectCard';


const WebProjects = (props) => {

    const [projects] = useState(data);
    console.log(projects);


    return (
        
        <div className="projectContainer">

            <Col>
                <Row className="sectionHeader">
                    <h1>Web</h1>
                </Row>

                <Row className="skillIconContainer">
                    <img className="skillIcon" src="./img/html5.svg" alt="html icon"/>
                    <img className="skillIcon" src="./img/less.svg" alt="less icon"/>
                    <img className="skillIcon" src="./img/css.svg" alt="css icon"/>
                    <img className="skillIcon" src="./img/javascript.svg" alt="javascript icon"/>
                    <img className="skillIcon" src="./img/react.svg" alt="react icon"/>
                </Row>

                <Row className="projects">
                    {projects.map (web => (
                        <ProjectCard
                            key={web.id}
                            img={web.img}
                            project={web.project}
                            stack={web.stack}
                            url={web.url}
                        />
                    ))}
                </Row>
            </Col>
        </div>
    );
}
export default WebProjects;