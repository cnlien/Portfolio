import React from 'react';

import {Card, CardImg} from 'reactstrap'

const VideoCard = (props) => {
    
    return(
        <Card className="video-card">
            <iframe
                width="100%"
                height="auto"
                title={props.title}
                src={props.embedUrl}
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="true"
            />
        </Card>
    )
}

export default VideoCard;