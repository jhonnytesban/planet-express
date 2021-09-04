import React from 'react'
import '../styles/Main.css'
import Countdown from './Countdown'
import Price from './Price'

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__subtitle">Lass mejores ofertas</h2>
      <section className="main-section">
        <Countdown />
      </section>
      <section>
        <Price />
      </section>
    </main>
  )
}

export default Main
