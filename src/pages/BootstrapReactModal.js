import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BootstrapReactModal() {

    let [show, setShow] = useState(false);
    let handleClose = ()=> { setShow(false); }
    let handleShow = ()=> { setShow(true); }

    
  return (
    <>
         <button onClick={handleShow}>Open</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
