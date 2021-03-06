import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import '../../styles/projects.scss';

import data from './designProjData';
import ProjectCard from '../ProjectCard';

const DesignProjects = () => {

    const [projects] = useState(data);

    return (
    <div className="projectContainer">
        <Col>
            <Row className="sectionHeader">
                <h1>Video &amp; Design</h1>
            </Row>
            <Row>
            <h4>This portflio is a work in progress. I'll get to these eventually. Here is the software I'm an expert in.</h4>

            </Row>
            <Row className="skillIconContainer">
               <img className="skillIcon" src="./img/icons/xd.svg" alt="xd icon"/>
               <img className="skillIcon" src="./img/icons/illustrator.svg" alt="illustrator icon"/>
               <img className="skillIcon" src="./img/icons/photoshop.svg" alt="photoshop icon"/>
               <img className="skillIcon" src="./img/icons/indesign.svg" alt="indesign icon"/>
               <img className="skillIcon" src="./img/icons/dimension.svg" alt="dimension icon"/>
            </Row>

            <Row className="projects design-projects">
                {projects.map (design => (
                    <ProjectCard
                        key={design.id}
                        img={design.img}
                        project={design.project}
                        route={design.projectlink}
                    />
                ))}
            </Row>
        </Col>
    </div>
    );
}
export default DesignProjects;