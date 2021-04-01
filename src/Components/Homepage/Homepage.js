import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Quizes from '../Quizes/Quizes'

import c from './Homepage.module.sass'

function Homepage() {
  const user = useSelector((state) => state.user)
  localStorage.setItem('user', JSON.stringify(user))
  console.log(useLocation())
  return (
    <div className={c.HomepageContainer}>
      <div className={`${c.Homepage} container`}>
        <h1>Добро пожаловать на тестирующую систему Natural Grade</h1>
        <div className={c.Desc}>
          Здесь вы можете пройти тесты, необходимые для подтверждения ваших
          знаний
          <Quizes />
        </div>
      </div>
    </div>
  )
}

export default Homepage
