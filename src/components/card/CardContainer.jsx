import React from "react";
import Card from "./Card";
import "./Card.scss";
import { data } from "../../assets/data.js";

const CardContainer = () => {
  return (
    <div className="container cardContainer ">
      {data.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default CardContainer;
