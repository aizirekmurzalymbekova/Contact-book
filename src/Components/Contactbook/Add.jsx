import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Add.css";

const Add = (props) => {
  const { addContact } = props;

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: name.trim(),
      surName: surName.trim(),
      number,
    };

    for (let key in newContact) {
      if (!newContact[key]) {
        return alert("Fill in the fields");
      }
    }
    addContact(newContact);
    setName("");
    setSurName("");
    setNumber("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
            placeholder="Enter surname"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Type number"
          />
        </Form.Group>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};

export default Add;
