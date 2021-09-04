import React from 'react'
import '../styles/ListEmployees.css'

const ListEmployees = ({ name, img, specie, age }) => {
  return (
    <article className="article-employees">
      <img src={img} alt="" className="employees__img" />
      <div className="employees-content">
        <h3 className="content__title">Nombre: {name}</h3>
        <p className="content__text">Especie: {specie === 'Human' ? 'Humano' : 'No humano'}</p>
        <p className="content__age">{age === 'Unknown' ? 'Edad no registrada' : age + ' años'}</p>
      </div>
    </article>
  )
}

export default ListEmployees
