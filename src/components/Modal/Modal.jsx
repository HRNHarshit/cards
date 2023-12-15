import React, { useState, createContext } from "react";
import "./Modal.css";
import data from "../../data.json";

const Modal = (props, key) => {
  const [person, setPerson] = useState(data);

  const onHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="modal_wrapper">
      <div className="modal">
        <div className="header">
          <span>Basic Model</span>
        </div>

        <form className="edit-info" onClick="submit">
          <div className="form-name">
            <label for="name">Name:</label>
            <input type="text" id="name" value={person.name} required />
          </div>

          <div className="form-mail">
            <label for="mail">Email:</label>
            <input type="email" id="mail" value={person.mail} required />
          </div>

          <div className="form-contact">
            <label for="contact">Contact:</label>
            <input type="text" id="contact" value={person.contact} required />
          </div>

          <div className="form-website">
            <label for="website">Website:</label>
            <input type="text" id="website" value={person.website} required />
          </div>

          <div className="btn-div">
            <button type="reset" className="btn btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn btn-submit" onClick={onHandle}>
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
