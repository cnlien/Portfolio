import React, { useState } from 'react';
import data from './design-projects/designProjData';

import {
    Card, 
    CardImg, 
    Modal, 
    ModalBody,
    CardFooter,
    ModalHeader,
} from 'reactstrap';
import ProjectColors from './design-projects/project-components/ProjectColors';

// import ProjectColors from './design-projects/project-components/ProjectColors';

const DesignCard = (props) => {



    const [modal, setModal] = useState(false);
    const toggle=()=>setModal(!modal);

    const colors = useState(props.color);
    
    return(
        <>
            <Card className="design-card" size="sm">
                <CardImg className="design-card-img" src={props.img} onClick={toggle} />
                <CardFooter className="design-card-description">{props.project}</CardFooter>
            </Card>

            <Modal isOpen={modal} toggle={toggle} className="design-card-modal" centered size="lg">
                <ModalHeader>
                    {props.project}
                </ModalHeader>

                <ModalBody>
                    <h4>About This Logo:</h4>
                    <p>{props.description}</p>
                    <img className="design-card-modal-img" src={props.img} alt={props.project} />

                    {/* {console.log(colors[0])}

                    <div className="project-color" style={{backgroundColor: `${colors.hex}`}}/>

                                        
                    {colors[0].map (color => (
                        // console.log("from .map", color)
                        <div className="project-color" style={{backgroundColor: `${color.hex}`}}/>
                        // <ProjectColors
                        //     key={color.id}
                        //     color={color.color}
                        // />
                     ))} */}

                </ModalBody>
            </Modal>
        </>
    );
}

export default DesignCard;