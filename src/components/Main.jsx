import React from 'react'
import '../styles/Main.css'
import Price from './Price'

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__subtitle">Los mejores precios y ofertas</h2>
      <section className="main-section">
        {/* <h3 className="section__subtitle">Comprueba precios</h3> */}
        <Price />
      </section>
    </main>
  )
}

export default Main
