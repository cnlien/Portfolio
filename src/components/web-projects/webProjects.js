import React, { useState } from 'react';

// DATA
import data from './webProjData';

// COMPONENTS
import ProjectCard from '../ProjectCard';
import { Col, Row } from 'reactstrap';

// STYLES
import '../../styles/projects.scss';

// GOOGLE ANALYTICS
import ReactGA from 'react-ga';

const WebProjects = () => {

    // GOOGLE ANALYTICS TRACKER
    ReactGA.pageview(window.location.pathname + window.location.search);

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

                <Row className="projects web-projects">
                    {projects.map (web => (
                        <ProjectCard
                            key={web.id}
                            img={web.img}
                            project={web.project}
                            repositoryLink={web.repositoryLink}
                            buttonText={web.buttonText}
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