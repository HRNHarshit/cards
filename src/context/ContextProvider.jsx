import React, { useState, createContext } from "react";
import data from "../data.json";

const CardContext = createContext();

const ContextProvider = (props) => {
  const [card, setCard] = useState(data);

  return (
    <>
      <CardContext.Provider value={{card}}>{props.card}</CardContext.Provider>
    </>
  );
};

export default ContextProvider;
