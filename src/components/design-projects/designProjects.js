import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import '../projects.scss';

import data from './designProjData';
import ProjectCard from '../ProjectCard';

const DesignProjects = () => {

    const [projects] = useState(data);
    console.log(projects);

    return (
    <div className="projectContainer">
        <Col>
            <Row className="sectionHeader">
                <h1>Design</h1>
            </Row>
            <Row>
            <h4>This portflio is a work in progress. I'll get to these eventually. Here is the software I'm an expert in.</h4>

            </Row>
            <Row className="skillIconContainer">
               <img className="skillIcon" src="./img/xd.svg" alt="xd icon"/>
               <img className="skillIcon" src="./img/illustrator.svg" alt="illustrator icon"/>
               <img className="skillIcon" src="./img/photoshop.svg" alt="photoshop icon"/>
               <img className="skillIcon" src="./img/indesign.svg" alt="indesign icon"/>
               <img className="skillIcon" src="./img/dimension.svg" alt="dimension icon"/>
            </Row>

            {/* <Row className="projects">
                {projects.map (design => (
                    <ProjectCard
                        key={design.id}
                        img={design.img}
                        project={design.project}
                        stack={design.stack}
                        url={design.url}
                        description={design.description}
                    />
                ))}
            </Row> */}
        </Col>
    </div>
    );
}
export default DesignProjects;