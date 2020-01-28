import React from 'react';

const ProjectAsset = (props) => {

    return (
        <div className="project-asset">
            <h5>{props.type}</h5>
            <img
                className="project-image"
                src={props.src}
                alt={props.type}
                style={{maxWidth:"100%"}}
            />
        </div>
    //    <div
    //         className="project-color"
    //         style={{backgroundColor: `${props.color}`, height: '100px', width: '100px'}}
    //     />
    )
}

export default ProjectAsset;