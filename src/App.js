import React from "react";
import Dinner from "./Dinner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dinner dishName="Nihari" sweetDish="Kheer" />

      <hr />

      <Dinner dishName="Biryani" sweetDish="Jalebi" />

      <hr />

      <Dinner dishName="Karahi" sweetDish="Gajar Ka Halwa" />
    </div>
  );
}

export default App;
