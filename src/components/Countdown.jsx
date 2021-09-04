import React, { useEffect, useRef, useState } from 'react'
import oferta from '../assets/oferta_adobespark.png'
import '../styles/CountDown.css'

const Countdown = () => {
  const [timeDays, setTimeDays] = useState('00')
  const [timeHours, setTimeHours] = useState('00')
  const [timeMinutes, setTimeMinutes] = useState('00')
  const [timeSeconds, setTimeSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countDownDate = new Date('Sep 7, 2021 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance /(1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimeDays(days)
        setTimeHours(hours)
        setTimeMinutes(minutes)
        setTimeSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    let newInterval = interval.current
    startTimer()
    return () => {
      clearInterval(newInterval)
    }
  })

  return (
    <>
      <article className="article">
        {/* <h3 className="article__title">Y las mejores ofertas</h3> */}
        <div className="container-oferta">
          <img className="oferta__img" src={oferta} alt="oferta" />
          <p className="oferta__time" >{timeDays} : {timeHours} : {timeMinutes} : {timeSeconds}</p>
        </div>
        {/* <p>Dias{timeDays} : Horas{timeHours} : Minutos{timeMinutes} : Segundos{timeSeconds}</p> */}
      </article>
    </>
  )
}

export default Countdown
