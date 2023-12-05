import React from "react";
import Card from "./Card";
import "./Card.scss";
import { data } from "../../assets/data.js";

const CardContainer = ({ filterValue }) => {
  // Filter the data based on the input value
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="container cardContainer">
      {filteredData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default CardContainer;
