import React from "react";
import { useCountDown } from "../hooks/useCountDown";
import "../styles/Offers.css";

const Offer = ({ initialState, img, name }) => {
  const { timeDays, timeHours, timeMinutes, timeSeconds } = useCountDown(initialState);
  return (
    <>
      <article className="article-offers">
        <img src={img} alt="" className="offers__img" />
        <div className="offers-content">
          <h3 className="offers__title">Envíos a Planet {name}</h3>
          <p className="offers__text">
            Envios a <strong>¡MITAD DE PRECIO!</strong>, no dudes en aprovechar
            la oferta.
          </p>
          <p className="offers__text">
            La <strong>OFERTA</strong> acaba en:{" "}
          </p>
          <div className="offers-count">
            <p className="time">
              {timeDays}d :{timeHours}h :{timeMinutes}m :{timeSeconds}s
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Offer;
