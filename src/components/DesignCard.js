import React, { useState } from 'react';

import {
    Card, 
    CardImg, 
    Modal, 
    ModalBody,
    CardFooter,
    ModalHeader,
} from 'reactstrap';

import ProjectColors from './design-projects/project-components/ProjectColors';
import data from './design-projects/designProjData';

const DesignCard = (props) => {

    console.log('props from DesignCard.js', props)
    const [modal, setModal] = useState(false);
    const toggle=()=>setModal(!modal);

    const colors = useState(props.color);
    console.log("Colors from DesignCard.js", colors);

    const assets = useState(props.color);
    console.log("Assets from DesignCard.js", assets);
    
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
                    
                    <div className="project-info">

                        <h4>Color Palette</h4>
                        <div className="project-container project-colors">
                            {props.color.map(color => (
                                <ProjectColors
                                    key={color.id}
                                    color={color.hex}
                                />
                            ))}
                        </div>

                        <h4>Project Assets</h4>
                        <div className="project-container project-assets">
                            {props.color.map(color => (
                                <ProjectColors
                                    key={color.id}
                                    color={color.hex}
                                />
                            ))}
                        </div>
                    </div>

                </ModalBody>
            </Modal>
        </>
    );
}

export default DesignCard;