import React, { useState } from "react";
import '../styles/Form.css'

const Form = () => {
  const [text, setText] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.trim() === '') {
      alert('Los campos están vacíos')
      setText('')
    } else {
      alert(text)
    }
    setText('')
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input className="form__email" type="email" placeholder="Escribe tu email" value={text} onChange={(event) => setText(event.target.value)} />
        <input className="form__submit" type="submit" value="Suscríbete" />
      </form>
    </>
  );
};

export default Form;