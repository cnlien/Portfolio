import React from 'react';

const ProjectColors = (props) => {

    return (
       <div
            className="project-color"
            style={{backgroundColor: `${props.color}`, height: '100px', width: '100px'}}
        />
    )
}

export default ProjectColors;