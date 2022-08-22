import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option key="" value="" selected="selected">Select Contact</option>
      {contacts.map((contact) => {
        return <option key={contact} value={contact}>{contact}</option>
      })}
    </select>
  );
};