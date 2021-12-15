import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function ModalTest(props) {
    const history = useHistory();
    const [reveal, setReveal] = useState(false);

    const handleClose = () => {
        setReveal(false);
        history.push(props.Finish);
    }

    const handleRetry = () => {
        window.location.reload();
    }

    useEffect(() => {
        // Runs once, after mounting
        setReveal(props.Reveal);
      }, [props.Reveal]);

    return (
        <>
            <Modal show={reveal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.Body}</Modal.Body>
                <Modal.Footer>
                    {props.Success === true && (
                        <>
                            <Button variant="secondary" onClick={handleClose}>
                                Fechar
                            </Button>
                        </>
                        )
                    }
                    {
                        props.Success === false && (
                            <>
                                <Button variant="secondary" onClick={handleClose}>
                                    Fechar
                                </Button>
                                <Button variant="primary" onClick={handleRetry}>
                                    Tentar novamente
                                </Button>
                            </>
                            )
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalTest;