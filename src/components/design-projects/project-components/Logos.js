import React, { useState } from 'react';
import data from '../designProjData';

import { Container } from 'reactstrap';

import DesignCard from '../../DesignCard';

import "../../../styles/projects.scss"

const Logos = () => {

    const [projectData] = useState(data[0].logos);
    console.log("projectData from Logos.js", projectData)
    
    return(
        <Container className="logos">
            <h1>Logo Designs</h1>

            <div className="logo-cards">
                {projectData.map (logos => (
                    <DesignCard
                        key={logos.id}
                        img={logos.img}
                        description={logos.description}
                        description2={logos.description2}
                        project={logos.project}
                        color={logos.colors}
                        assets={logos.assets}
                    />
                ))}
            </div>

        </Container>
    );
}

export default Logos;