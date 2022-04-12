import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Edit = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    contactToEdit,
    saveContact,
    setContactToEdit,
  } = props;

  const [name, setName] = useState(contactToEdit.name);
  const [number, setNumber] = useState(contactToEdit.number);
  const [surName, setSurName] = useState(contactToEdit.surName);

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      name: name.trim(),
      surName: surName.trim(),
      number,
      id: contactToEdit.id,
    };
    saveContact(editedContact);
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={() => {
        setContactToEdit(null);
        setIsModalOpen(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit the contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surame</Form.Label>
            <Form.Control
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              type="text"
              placeholder="Enter surname"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number</Form.Label>
            <Form.Control
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value))}
              type="number"
              placeholder="Type number"
            />
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Edit;
