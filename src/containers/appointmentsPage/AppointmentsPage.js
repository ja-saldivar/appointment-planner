import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (appointments, contacts, addAppointments) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setdate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointments(title, contact, date, time);
    setTitle('');
    setContact('');
    setdate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setdate={setdate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          appointments={appointments}
        />
      </section>
    </div>
  );
};
