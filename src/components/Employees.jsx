import React from "react";
import { useEmployees } from "../hooks/useEmployees";

const Employees = () => {

  const { sortCharacter, offset, handleOffsetNext, handleOffsetBack } = useEmployees()
  // const [characters, setCharacters] = useState([]);
  // const [offset, setOffset] = useState(0);

  // const [sortCharacter, setSortCharacter] = useState([]);

  // useEffect(() => {
  //   const fetching = async () => {
  //     const res = await fetch(
  //       "https://futuramaapi.herokuapp.com/api/v2/characters"
  //     );
  //     const data = await res.json();
  //     setCharacters(data);
  //     // setOffset(0);
  //   };
  //   fetching();
  //   if (characters.length > 0) {
  //     let characterOffset = characters.slice(offset, offset + 5)
  //     setSortCharacter(characterOffset);
  //   }
  // }, []);

  // const handleNext = () => {
  //   setOffset(number => number + 5)
  // }

  return (
    <>
      <h2>Empleados</h2>
      {offset <= 10 && <button onClick={handleOffsetNext}>Siguiente</button>}
      {offset >= 5 && <button onClick={handleOffsetBack}>Atrás</button>}
      
      {sortCharacter.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        sortCharacter.map((character) => (
          <p key={Math.random()}>{character.Name}</p>
        ))
      )}
    </>
  );
};

export default Employees;
