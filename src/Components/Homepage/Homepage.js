import React from 'react'
import Quizes from '../Quizes/Quizes'

import c from './Homepage.module.sass'

function Homepage() {
  return (
    <div className={`${c.Homepage} container`}>
      <h1>Добро пожаловать на тестирующую систему Natural Grade</h1>
      <div className={c.Desc}>
        Здесь вы можете пройти тесты, необходимые для подтверждения ваших знаний
        <Quizes />
      </div>
    </div>
  )
}

export default Homepage
