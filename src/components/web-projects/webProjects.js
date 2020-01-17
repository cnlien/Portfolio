import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import '../../styles/projects.scss';

import data from './webProjData';
import ProjectCard from '../ProjectCard';


const WebProjects = () => {

    const [projects] = useState(data);

    return (
        
        <div className="projectContainer">

            <Col>
                <Row className="sectionHeader">
                    <h1>Web</h1>
                </Row>

                <Row className="skillIconContainer">
                    <img className="skillIcon" src="./img/icons/html5.svg" alt="html icon"/>
                    <img className="skillIcon" src="./img/icons/less.svg" alt="less icon"/>
                    <img className="skillIcon" src="./img/icons/css.svg" alt="css icon"/>
                    <img className="skillIcon" src="./img/icons/javascript.svg" alt="javascript icon"/>
                    <img className="skillIcon" src="./img/icons/react.svg" alt="react icon"/>
                </Row>

                <Row className="projects">
                    {projects.map (web => (
                        <ProjectCard
                            key={web.id}
                            img={web.img}
                            project={web.project}
                            // stack={web.stack}
                            url={web.url}
                            description={web.description}
                            projectlink={web.projectlink}
                        />
                    ))}
                </Row>
            </Col>
        </div>
    );
}
export default WebProjects;