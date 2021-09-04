import React from 'react'
// import eternium from '../assets/planet-eternium.jpg'
import { useCountDown } from '../hooks/useCountDown'
import '../styles/Offers.css'


const Offer = ({initialState, img, name}) => {
  const { timeDays, timeHours, timeMinutes, timeSeconds } = useCountDown(initialState)
  return (
    <>
      <article className="article-offers">
        <div className="container-img-offers">
          <img src={img} alt="" className="offers__img" />
        </div>
        <div className="offers-content">
          <h3 className="offers__title">Envíos a Planet {name}</h3>
          <p className="offers__text">
            Envios a <strong>¡MITAD DE PRECIO!</strong>, no dudes en aprovechar la oferta.
          </p>
          <p className="offers__text">La <strong>OFERTA</strong> acaba en: </p>
          <div className="offers-count">
            <p className="time">{timeDays}d :{timeHours}h :{timeMinutes}m :{timeSeconds}s</p>
            {/* <p className="days">{timeDays}</p>
            <p className="hours">{timeHours}</p>
            <p className="minutes">{timeMinutes}</p>
            <p className="seconds">{timeSeconds}</p> */}
          </div>
        </div>
      </article>
    </>
  )
}

export default Offer
