import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./List.css";

const List = (props) => {
  const { contacts, delContact, getContactToEdit } = props;
  return (
    <div>
      {contacts.map((item) => {
        return (
          <ul>
            <li key={item.id} style={{ textDecoration: "none" }}>
              <div>
                {item.name}
                {item.surName}
              </div>
              <div>{item.number}</div>
              <Button class="btn" onClick={() => delContact(item.id)}>
                Delete
              </Button>
              <Button class="btn" onClick={() => getContactToEdit(item.id)}>
                Edit
              </Button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default List;
