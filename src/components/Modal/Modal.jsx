import React, { useState } from "react";
import "./Modal.css";

const Modal = (props, key) => {
  const [person, setPerson] = useState(props);

  return (
    <div className="modal_wrapper">
      <div className="modal">
        <div className="header">
          <span>Basic Model</span>
        </div>

        <form className="edit-info">
          <div className="form-name">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={person.name} required />
          </div>

          <div className="form-mail">
            <label for="mail">Email:</label>
            <input type="email" id="mail" name="mail" value={person.mail} required />
          </div>

          <div className="form-contact">
            <label for="contact">Contact:</label>
            <input type="text" id="contact" name="contact" value={person.contact} required />
          </div>

          <div className="form-website">
            <label for="website">Website:</label>
            <input type="text" id="website" name="website" value={person.website} required />
          </div>

          <div className="btn-div">
            <button type="reset" className="btn btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn btn-submit">
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
