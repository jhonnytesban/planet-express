import React, { useState } from "react";
import icon from '../assets/email_white.svg'
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
        <div className="form-img">
          <img className="form__img" src={icon} alt="" />
        </div>
        <input className="input-email" type="email" placeholder="Escribe tu email" value={text} onChange={(event) => setText(event.target.value)} />
        <input className="input-submit" type="submit" value="Suscríbete" />
      </form>
    </>
  );
};

export default Form;