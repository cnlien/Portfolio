import React, { useState } from 'react';

// DATA
import data from '../webProjData';

// COMPNENTS
import {
    Jumbotron,
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

// GOOGLE ANALYTICS
import ReactGA from 'react-ga';

const SpirtsOfFrenchLick = () => {

    // GOOGLE ANALYTICS TRACKER
    ReactGA.pageview(window.location.pathname + window.location.search);

    const [projectData] = useState(data[1]);

    // THESE MANAGE THE CAROUSEL STATE
    const [galleryImages] = useState(data[1].galleryImages);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // THIS MANAGES TECHNOLOGY LOGOS
    const [technologyLogos] = useState(data[1].technologyLogos);
    console.log(technologyLogos);

    const technology = technologyLogos.map((logo) => {
        return (
            <div className="project-technology-logo">
                <img src={logo.src} alt={logo.alt} />
            </div>
        )
    })

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === galleryImages.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
    
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? galleryImages.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    const slides = galleryImages.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return(
        <div className="project-details">
            <div className="project-intro">
                <Jumbotron className="project-title">
                    <div className="project-image">
                        <img className="project-image-display" src={projectData.img} alt="French Lick Winery Mock Up" />
                    </div>

                    <div className="project-info">
                        <h1 className="display-3">{projectData.project}</h1>
                        <h2 className="lead">{projectData.stack}</h2>
                        <a href={projectData.url} target="_blank" rel="noopener noreferrer"><Button block>Visit Site</Button></a>
                        <a href={projectData.repositoryLink} target="_blank" rel="noopener noreferrer"><Button color="secondary" block>Github Repo</Button></a>
                    </div>
                </Jumbotron>
            </div>

            <div className="project-description">
                <h1>About this Project</h1>
                <p>{projectData.description}</p>
            </div>

            <div className="project-technology">
                <h1>Project Technology</h1>
                <div className="project-technology-logo-container">
                    {technology}
                </div>
            </div>

            <div className="project-screens">
                <h1>Screenshots</h1>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={galleryImages} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>

        </div>
    );
}

export default SpirtsOfFrenchLick;