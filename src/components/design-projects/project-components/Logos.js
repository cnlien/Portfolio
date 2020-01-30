import React, { useState } from 'react';

// DATA
import data from '../designProjData';

// COMPONENTS
import { Container } from 'reactstrap';
import DesignCard from '../../DesignCard';

// STYLES
import "../../../styles/projects.scss"

// GOOGLE ANALYTICS
import ReactGA from 'react-ga';

const Logos = () => {

    // GOOGLE ANALYTICS TRACKER
    ReactGA.pageview(window.location.pathname + window.location.search);

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