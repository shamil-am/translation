"use client";

import { ChangeEvent, useState } from "react";

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({ name: "", surname: "" });

  const handleChange =
    (name: "name" | "surname") => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setContactInfo((prevState) => ({ ...prevState, [name]: value }));
    };

  return (
    <div>
      <h3>Form</h3>
      <form>
        <input
          value={contactInfo.name}
          onChange={handleChange("name")}
          placeholder="name"
        />
        <br />
        <input
          value={contactInfo.surname}
          onChange={handleChange("surname")}
          placeholder="surname"
        />
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
