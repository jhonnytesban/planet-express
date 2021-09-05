import { useState, useEffect } from "react";

export const useEmployees = () => {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  const [sortCharacter, setSortCharacter] = useState([]);

  const handleOffsetNext = () => {
    setOffset((number) => number + 5);
  };
  const handleOffsetBack = () => {
    setOffset((number) => number - 5);
  };

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        "https://futuramaapi.herokuapp.com/api/v2/characters"
      );
      const data = await res.json();
      setCharacters(data);
    };
    if (characters.length === 0) {
      fetching();
    } else {
      let characterOffset = characters.slice(offset, offset + 5);
      setSortCharacter(characterOffset);
    }
  }, [characters, offset]);

  return { sortCharacter, handleOffsetNext, handleOffsetBack, offset };
};
