import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/myModal.module.css";

const MyModal = () => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <>
      <Button className={styles.button} variant="Outline" onClick={handleShow}>
        <i className="bi bi-geo-alt" style={{ marginRight:"10px" }}></i>
        Dirección o punto de referencia
      </Button>
      <Modal show={lgShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Ingresá tu dirección</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
          height: "50vh", paddingTop:"50px"}}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Dirección o punto de referencia"
                autoFocus
              />
            </Form.Group>
            <Form.Group styles={{borderBottom:" 1px solid rgb(213, 207, 207)", fontSize:" small",fontWeight: "600", paddingTop: "50px"}}>
            <i className="bi bi-compass" style={{marginRight:"10px"}}></i>Mi ubicación actual
           </Form.Group>
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default MyModal;
