import React, { useState } from 'react';
import data from '../designProjData';

import { Container } from 'reactstrap';

import VideoCard from '../../VideoCard';

import "../../../styles/projects.scss"

const VideoProduction = () => {

    const [projectData] = useState(data[1].videos);
    console.log("projectData from VideoProduction.js", projectData)
    
    return(
        <Container>
            <h1>Video Production</h1>
            
            <div>
                {projectData.map (video => (
                    <VideoCard
                        key={video.id}
                        embedUrl={video.embedUrl}
                        description={video.description}
                        description2={video.description2}
                        project={video.project}
                        color={video.colors}
                        assets={video.assets}
                    />
                ))}
            </div>

        </Container>
    );
}

export default VideoProduction;
