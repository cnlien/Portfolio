import React from 'react';

const ProjectColors = (props) => {

    return (
       <div className="project-color" style={{backgroundColor: `${props.color}`}}/>
    )
}

export default ProjectColors;