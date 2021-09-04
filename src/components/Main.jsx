import React from 'react'
import '../styles/Main.css'
// import Countdown from './Countdown'
import Offer from './Offer'
import Price from './Price'
import eternium from '../assets/planet-eternium.jpg'
import chapek from '../assets/planet-chapek.jpg'
import amphibios from '../assets/planet-amphibios.jpg'

const Main = () => {
  return (
    <main className="main">
        <h2 className="main__subtitle">Las mejores ofertas</h2>
      <section className="main-offers">
        <Offer initialState='7' img={eternium}/>
        <Offer initialState='8' img={chapek}/>
        <Offer initialState='10' img={amphibios}/>
      </section>
      <section>
        <Price />
      </section>
    </main>
  )
}

export default Main
