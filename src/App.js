import React, { useState } from "react";
import CardContainer from "./components/card/CardContainer";
import Header from "./components/header/Header";
import "./App.scss";

function App() {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <div>
      <Header onFilterChange={handleFilterChange} />
      <CardContainer filterValue={filterValue} />
    </div>
  );
}

export default App;
