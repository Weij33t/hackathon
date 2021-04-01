import React from 'react'
import Quiz from '../Quiz/Quiz'

function Qual() {
  return (
    <div className="container">
      <h1>Пожалуйста, пройдите тест, чтобы подтвердить вашу профпригодность</h1>

      <Quiz type="Переквалификация" />
    </div>
  )
}

export default Qual
