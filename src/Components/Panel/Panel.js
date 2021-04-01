import React from 'react'

import c from './Panel.module.sass'
import Progress from './Progress/Progress'
import { NavLink } from 'react-router-dom'

function Panel(props) {
  const isAuth = localStorage.getItem('auth') ?? true
  return (
    <div className={c.Panel}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/rating">Рейтинг</NavLink>
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
