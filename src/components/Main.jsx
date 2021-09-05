import React from "react";
import "../styles/Main.css";
import Offer from "./Offer";
import Calculator from "./Calculator";
import eternium from "../assets/planet-eternium.jpg";
import chapek from "../assets/planet-chapek.jpg";
import amphibios from "../assets/planet-amphibios.jpg";
import Employees from "./Employees";

const Main = () => {
  return (
    <main className="main">
      <div className="main-container">
        <h2 className="main__title">Las Mejores Ofertas de la Galaxia</h2>
        <section className="main-offers">
          <Offer initialState="7" img={eternium} name="Eternium" />
          <Offer initialState="8" img={chapek} name="Chapek" />
          <Offer initialState="10" img={amphibios} name="Amphibios" />
        </section>
        <section>
          <Calculator />
        </section>
      </div>
      <div className="section-employees">
        <Employees />
      </div>
    </main>
  );
};

export default Main;
