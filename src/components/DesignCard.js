import React, { useState } from 'react';

import {
    Card, 
    CardImg, 
    Modal, 
    ModalBody,
    ModalHeader,
} from 'reactstrap';

import ProjectColors from './design-projects/project-components/ProjectColors';
import ProjectAsset from './design-projects/project-components/ProjectAssets';


const DesignCard = (props) => {

    const [modal, setModal] = useState(false);
    const toggle=()=>setModal(!modal);
    // const colors = useState(props.color);
    // const assets = useState(props.assets);
    
    return(
        <>
            <Card className="design-card" size="sm">
                <CardImg className="design-card-img" src={props.img} onClick={toggle} />
            </Card>

            <Modal isOpen={modal} toggle={toggle} className="design-card-modal" centered size="lg" >
                <ModalHeader toggle={toggle}>
                    {props.project}
                </ModalHeader>

                <ModalBody>
                    <h4>About This Logo:</h4>
                    <p>{props.description}</p>
                    <p>{props.description2}</p>
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
                            {props.assets.map(asset => (
                                <ProjectAsset
                                    key={asset.id}
                                    src={asset.src}
                                    type={asset.type}
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