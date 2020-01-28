import React from 'react';

const ProjectColors = (props) => {

    return (
        <>
        <h5>{props.type}</h5>
        <img
            className="project-image"
            src={props.src}
            alt={props.type}
        />
        </>
    //    <div
    //         className="project-color"
    //         style={{backgroundColor: `${props.color}`, height: '100px', width: '100px'}}
    //     />
    )
}

export default ProjectColors;