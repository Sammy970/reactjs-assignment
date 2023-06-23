import React from "react";

import "./SmCards.css";

const SmCards = ({ smallTitle, NumberValue, color }) => {
  return (
    <>
      <div className="card" style={{ background: color }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Product_sample_icon_picture.png/800px-Product_sample_icon_picture.png" // Replace with your logo image path
          alt="Logo"
          className="logo"
        />
        <div className="card-content">
          <p>{smallTitle}</p>
          <h1>{NumberValue}</h1>
        </div>
      </div>
    </>
  );
};

export default SmCards;
