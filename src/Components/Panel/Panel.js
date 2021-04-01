import React from 'react'

import c from './Panel.module.sass'
import icon from '../../fonts/style.css'
import UserProfile from './UserProfile/UserProfile'
import Progress from './Progress/Progress'
import { NavLink } from 'react-router-dom'

function Panel() {
  const isAuth = localStorage.getItem('auth') ?? false

  return (
    <div className={c.Panel}>
      <NavLink to="/">Главная</NavLink>
      <Progress />
      <NavLink to="/shop">
        <span className="icon-cart-plus"></span>
      </NavLink>
      <NavLink to="/tests">Тесты</NavLink>
      {isAuth ? (
        <NavLink to="/user">
          <span className={'icon-user'}></span>
        </NavLink>
      ) : (
        <NavLink to="/auth">Войти</NavLink>
      )}
    </div>
  )
}

export default Panel
