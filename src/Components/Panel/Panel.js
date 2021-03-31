import React from 'react'

import c from './Panel.module.sass'
import UserProfile from './UserProfile/UserProfile'
import Progress from './Progress/Progress'
import { NavLink } from 'react-router-dom'

function Panel() {
  return (
    <div className={c.Panel}>
      <Progress />
      <NavLink to="/tests">Тесты</NavLink>
      <NavLink to="/user">Профиль</NavLink>
    </div>
  )
}

export default Panel
