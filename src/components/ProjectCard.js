import React, { useState } from 'react';
import { Card, Button, CardImg, CardTitle, CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectCard = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <Card className="projectCard">
            <CardImg src={props.img} alt={props.project} />
            <CardBody>
            <CardTitle><h1>{props.project}</h1></CardTitle>

                <div className="projectButtons">
                    <Button onClick={toggle}>About The Project</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            <h1>{props.project}</h1>
                        </ModalHeader>

                        <ModalBody>
                            <p>{props.description}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    <a href={props.url} target="_blank" rel="noopener noreferrer"><Button>View The Site</Button></a>
                </div>
                <CardSubtitle><p>{props.stack}</p></CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;