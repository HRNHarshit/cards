import React, { useState } from "react";
import "./Modal.css";

const Modal = (props, key) => {
  const [person, setPerson] = useState(props);

  return (
    <div className="modal">
      <div className="header">
        <span>Basic Model</span>
      </div>

      <form className="edit_info">
        <div className="form_name">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" value={person.name} required />
        </div>

        <div className="form_mail">
          <label for="mail">Email:</label>
          <input type="email" id="mail" name="mail" value={person.mail} required />
        </div>

        <div className="form_contact">
          <label for="contact">Contact:</label>
          <input type="text" id="contact" name="contact" value={person.contact} required />
        </div>

        <div className="form_website">
          <label for="website">Website:</label>
          <input type="text" id="website" name="website" value={person.website} required />
        </div>

        <div className="btn_div">
          <button type="reset">Cancel</button>
          <button type="submit">Ok</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
