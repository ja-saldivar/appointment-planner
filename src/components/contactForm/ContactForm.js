import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={({target}) => setName(target.value)} placeholder='Contact Name' />
      <input type='tel' name='phone' value={phone} onChange={({target}) => setPhone(target.value)} placeholder='Contact Phone' pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
      <input type='email' name='email' value={email} onChange={({target}) => setEmail(target.value)} placeholder='Contact Email' />
      <input type='submit' value='Add Contact' />
    </form>
  );
};