// React
import React, { useState } from "react";
// CSS
import "./Card.css";
// Icons
import { FaEnvelope, FaPhone, FaGlobe, FaHeart, FaRegHeart, FaPenSquare, FaTrash } from "react-icons/fa";
// Components
import Modal from "../Modal/Modal";
// Data
import data from "../../data.json";

const Card = (props, key) => {
  const [like, setLike] = useState(true);
  const [showModal, setShowModel] = useState(false);
  const [person, setPerson] = useState(data);

  const onHandle = (key) => {
    setPerson(person.filter((per) => per.id !== key));
  };

  return (
    <div className="card">
      <div className="container">
        <div className="HeadImage">
          <img src={props.img} alt="Avatar" />
        </div>

        <div className="card_info">
          <div className="info_name">
            <h3>{props.name}</h3>
          </div>

          <div className="info_contact">
            <div className="info_email">
              <FaEnvelope size="17" color="6f6f6f" />
              <p>{props.mail}</p>
            </div>
            <div className="info_phone">
              <FaPhone size="17" color="6f6f6f" />
              <p>{props.contact}</p>
            </div>
            <div className="info_website">
              <FaGlobe size="17" color="6f6f6f" />
              <p>{props.website}</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer_div btn_like">
            <button className="btn" onClick={() => setLike(!like)}>
              {like ? <FaRegHeart color="red" size="19" /> : <FaHeart color="red" size="19" />}
            </button>
          </div>
          <div className="footer_div btn_edit">
            <button className="btn" onClick={() => setShowModel(!showModal)}>
              <FaPenSquare size="19" color="6f6f6f" />
              {showModal && <Modal />}
            </button>
          </div>
          <div className="footer_div btn_delete">
            <button className="btn" onClick={() => onHandle(key)}>
              <FaTrash size="19" color="6f6f6f" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
