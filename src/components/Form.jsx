import React, { useState } from "react";
import warning from '../assets/advertencia.png'
import "../styles/Form.css";

const Form = () => {
  const [text, setText] = useState("");
  const [isSuscribed, setIsSuscribed] = useState(false)
  const [isValidator, setIsValidator] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const validator =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (text.trim() === "") {
      alert("Los campos están vacíos");
      setText("");
    } else if(validator.test(text)){
      alert(`¡Te has suscrito, Enhorabuena!
      ${text}`);
      setIsSuscribed(true)
      setIsValidator(false)
    } else {
      setIsValidator(true)
    }
    setText("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__email"
          type="email"
          placeholder="Escribe tu email"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <input className="form__submit" type="submit" value={isSuscribed ? 'Suscrito' : 'Suscríbete'} />
        {isValidator && <p className="validate"><span><img className="warning" src={warning} alt="" /></span> El email está mal escrito</p>}
      </form>
    </>
  );
};

export default Form;
