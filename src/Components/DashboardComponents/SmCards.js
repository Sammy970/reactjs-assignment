import React from "react";

import "./SmCards.css";

const SmCards = ({ smallTitle, NumberValue, color, icon }) => {
  return (
    <>
      <div className="card" style={{ background: color }}>
        <img src={icon} alt="Logo" className="logo" />
        <div className="card-content">
          <p>{smallTitle}</p>
          <h1>{NumberValue}</h1>
        </div>
      </div>
    </>
  );
};

export default SmCards;
