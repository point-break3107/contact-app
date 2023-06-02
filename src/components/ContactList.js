import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContactHandler }) => {
  const handleDeleteContact = (id) => {
    deleteContactHandler(id);
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={handleDeleteContact}
        key={contact.id}
      />
    );
  });

  return <div>{renderContactList}</div>;
};

export default ContactList;
