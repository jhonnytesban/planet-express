import React from "react";
import { useEmployees } from "../hooks/useEmployees";
import ListEmployees from "./ListEmployees";
import "../styles/Employees.css";

const Employees = () => {
  const { sortCharacter, offset, handleOffsetNext, handleOffsetBack } =
    useEmployees();

  return (
    <>
      <h2 className="employees__title">Empleados</h2>
      

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
      {offset <= 10 && <button onClick={handleOffsetNext}>Siguiente</button>}
      {offset >= 5 && <button onClick={handleOffsetBack}>Atrás</button>}
    </>
  );
};

export default Employees;
