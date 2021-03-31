import React from 'react'
import { NavLink } from 'react-router-dom'

import c from './Quizes.module.sass'

function Quizes() {
  return (
    <div className={`${c.Quizes} container`}>
      <h1>Список доступных тестов</h1>
      <NavLink to="/tests/safe">Техника безопасности</NavLink>
      <NavLink to="/tests/qual">Переквалификация</NavLink>
    </div>
  )
}

export default Quizes
