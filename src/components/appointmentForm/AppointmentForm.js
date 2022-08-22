import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContacts = () => {
    return contacts.map((contact) => contact.name);
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" name="title" value={title} onChange={({target}) => setTitle(target.value)} placeholder="Appointment Title" />
      <ContactPicker value={contact} contacts={getContacts()} onChange={({target}) => setContact(target.value)} />
      <input type="date" name="date" value={date} onChange={({target}) => setDate(target.value)} min={getTodayString()} />
      <input type="time" name="time" value={time} onChange={({target}) => setTime(target.value)} />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};