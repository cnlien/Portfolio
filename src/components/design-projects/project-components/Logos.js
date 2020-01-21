import React, { useState } from 'react';
import data from '../designProjData';

import { Card, Jumbotron, Button, CardImg, CardTitle, CardHeader, CardText, Container } from 'reactstrap';
import "../../../styles/projects.scss"
const Logos = () => {

    const [rootProjectData] = useState(data)
    const [projectData] = useState(data[0].logos);
    console.log('Root Project Data from Logos.js ', rootProjectData)
    console.log('Project data from Logos.js: ',projectData)

    // const LogoCard = (props) => {
    //     <Card>
    //         <h1>{projectData.project}</h1>
    //     </Card>
    // }

    return(
        <Container>
        <Card className="design-card">
            <CardHeader>{projectData[0].description}</CardHeader>
            <CardImg className="design-cards-img" src={projectData[0].img} />
            <CardText>{projectData[0].description}</CardText>
        </Card>
        </Container>
    );
}

export default Logos;