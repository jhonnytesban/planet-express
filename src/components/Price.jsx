import React, { useState } from 'react'
import '../styles/Price.css'

const Price = () => {
  const [prices, setPrices] = useState({ packages: '', weight: '' })

  const [result, setResult] = useState()

  const handleChange = (event) => {
    setPrices({
      ...prices,
      [event.target.name]: parseInt(event.target.value) 
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (prices.packages === '' || prices.weight === "") {
      alert('Los campos están vacíos')
    } else {
      setResult(prices.packages + prices.weight)
    }
    setPrices({packages: '', weight: ''})
  }
  return (
    <>
      <form className="main-form" onSubmit={handleSubmit}>
        <h3 className="form__subtitle">Calcule los precios de envío</h3>
        {/* <label className="label-packages">Nº de Paquetes:</label> */}
        <input className="input-package" type="number" placeholder="Nº de paquetes" name="packages" value={prices.packages} onChange={handleChange}/>

        {/* <label className="label-weight">Peso en Kg:</label> */}
        <input className="input-weight" type="number" placeholder="Kilos en total" name="weight" value={prices.weight} onChange={handleChange} />
        <input className="calculate" type="submit" value="Calcular" />
        <p className="form__result">Coste del envio: {result && `${result}$`}</p>
      </form>
    </>
  )
}

export default Price
