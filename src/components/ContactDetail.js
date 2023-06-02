import React from "react";
import { useLocation } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = () => {
    const location = useLocation();
    const contact = location.state?.contact ?? null; 
    
    console.log(contact); 

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  const { name, email } = contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
