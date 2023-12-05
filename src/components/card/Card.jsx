import React, { useState } from "react";

const Card = ({ name, img, statistics }) => {
  const [toggle, setToggle] = useState(true);

  const handleChangeImg = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return toggle ? (
    <div className="card">
      <img
        src={img}
        onClick={handleChangeImg}
        className="card-img-top"
        alt="basketbol-player"
      />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  ) : (
    <div className="card toogleCard" onClick={handleChangeImg}>
      <ul>
        {statistics.map((item, i) => (
          <li style={{ listStyleType: "none" }} key={i}>
            🏀 {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
