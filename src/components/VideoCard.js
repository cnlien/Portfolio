import React from 'react';

import {Card, CardImg} from 'reactstrap'

const VideoCard = (props) => {
    
    return(
        <div>
            <Card>
                <iframe
                    width="100%"
                    title={props.title}
                    src={props.embedUrl}
                    frameborder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="true"
                />
            </Card>
        </div>
    )
}

export default VideoCard;