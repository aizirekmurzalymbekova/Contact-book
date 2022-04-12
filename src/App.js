import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Add from "./Components/Contactbook/Add";
import List from "./Components/Contactbook/List";
import Edit from "./Components/Contactbook/Edit";

const App = () => {
  const API = "http://localhost:8000/contacts";

  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  const addContact = async (newContact) => {
    await axios.post(API, newContact);
    getContact();
  };

  const getContact = async () => {
    const response = await axios(API);
    setContacts(response.data);
  };

  const delContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContact();
  };

  const getContactToEdit = async (id) => {
    const response = await axios(`${API}/${id}`);
    setContactToEdit(response.data);
    setIsModalOpen(true);
  };

  const saveContact = async (editedContact) => {
    await axios.put(`${API}/${editedContact.id}`, editedContact);
    setIsModalOpen(false);
    getContact();
    setContactToEdit(null);
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <Add addContact={addContact} />
      <List
        contacts={contacts}
        delContact={delContact}
        getContactToEdit={getContactToEdit}
      />
      {contactToEdit ? (
        <Edit
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          contactToEdit={contactToEdit}
          saveContact={saveContact}
          setContactToEdit={setContactToEdit}
        />
      ) : null}
    </div>
  );
};

export default App;
