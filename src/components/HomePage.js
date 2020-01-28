import React from 'react';

import { Container } from 'reactstrap';

import WebProjects from './web-projects/webProjects';
import DesignProjects from './design-projects/designProjects.js';

const HomePage = () => {

    return (
        <>
            <div className="heroBanner">
                <img className="heroImage" src="./img/profile-pic.jpg" alt="Pic of Chris"/>

                <h1 className="heroName">Chris Lien</h1>
                <h2 className="heroLocation">Indianapolis, IN, USA</h2>
                <h3 className="heroSkill">Front End Web Developer | Graphic Designer</h3>
                <br/>
                <p>While I work on this portfolio, connect with me.</p>
                
                <div className="socialLinksContainer">
                    <a href="http://www.github.com/cnlien"><img className='socialLinks githubLogo' src='./img/icons/github.svg' alt='Git Hub Logo'/></a>
                    <a href="http://www.linkedin.com/in/cnlien"><img className='socialLinks linkedinLogo' src='./img/icons/linkedin.svg' alt='LinkedIn Logo'/></a>
                </div>
            </div>

            <Container>
                <WebProjects />
                <DesignProjects />
            </Container>
        </>
    )
}

export default HomePage;