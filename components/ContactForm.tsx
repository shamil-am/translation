"use client";

import { useContext } from "react";

import { UserContext } from "@/contexts/userContext";

const ContactForm = () => {
  const { userInfo, changeUserInfo } = useContext(UserContext);

  return (
    <div>
      <h3>Form</h3>
      <form>
        <input
          value={userInfo.name}
          onChange={changeUserInfo("name")}
          placeholder="name"
        />
        <br />
        <input
          value={userInfo.surname}
          onChange={changeUserInfo("surname")}
          placeholder="surname"
        />
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
