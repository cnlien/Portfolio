import React, { useState } from 'react';
import data from '../designProjData';

import { Container } from 'reactstrap';

import VideoCard from '../../VideoCard';

import "../../../styles/projects.scss"

const VideoProduction = () => {

    const [projectData] = useState(data[1].videos);
    console.log("projectData from VideoProduction.js", projectData)
    
    return(
        <Container className="video-production">
            <h1>Video Production</h1>
            <p>Video Production for me started as a hobby while working on the set of a television for A&E. I was mesmerized by the amount of equipment that went into creating great production value. I was curious if I could work the same magic. I started to invest in video production equipment and began shooting and editing. My first professional go at video production was with my time spent at Cumulus Radio as the Indianapolis Digital Media Director.</p>

            <p>The position allowed me to dabble in both audio recording and mastering as well as afforded me the opportunity to work with better equipment. Below is a list of videos that I was the sole producer and editor.</p>
            
            <div className="video-production-cards">
                {projectData.map (video => (
                    <VideoCard
                        key={video.id}
                        embedUrl={video.embedUrl}
                    />
                ))}
            </div>

        </Container>
    );
}

export default VideoProduction;
