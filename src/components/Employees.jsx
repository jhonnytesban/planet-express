import React from "react";
import { useEmployees } from "../hooks/useEmployees";
import ListEmployees from "./ListEmployees";
import btnNext from "../assets/next.svg";
import btnBack from "../assets/back.svg";
import "../styles/Employees.css";

const Employees = () => {
  const { sortCharacter, offset, handleOffsetNext, handleOffsetBack } =
    useEmployees();

  return (
    <>
      <h2 className="employees__title">Empleados de Planet Express</h2>
      <section className="employees">
        {sortCharacter.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          sortCharacter.map((character) => (
            <ListEmployees
              key={character.Name}
              name={character.Name}
              img={character.PicUrl}
              specie={character.Species}
              age={character.Age}
            />
          ))
        )}
      </section>
      <div className="container-btn">
        {offset <= 10 && (
          <button className="btn-next" onClick={handleOffsetNext}>
            <img src={btnNext} alt="" className="btn__img" />
          </button>
        )}
        {offset >= 5 && (
          <button className="btn-back" onClick={handleOffsetBack}>
            <img src={btnBack} alt="" className="btn__img" />
          </button>
        )}
      </div>
    </>
  );
};

export default Employees;
