import React from 'react'
import { useSelector } from 'react-redux'

import c from './Rating.module.sass'

function Rating() {
  const userState = useSelector((state) => state.user)
  return (
    <div className={`container ${c.Rating}`}>
      <div className={c.Table}>
        <div className={c.Row}>
          <div className={c.Cell}>Имя Фамилия</div>
          <div className={c.Cell}>Очки</div>
        </div>
        <div className={c.Row}>
          <div className={c.Cell}>
            {userState.name + ' ' + userState.secondName}
          </div>
          <div className={c.Cell}>{userState.points}</div>
        </div>
        <div className={c.Row}>
          <div className={c.Cell}>John Doe</div>
          <div className={c.Cell}>0</div>
        </div>
      </div>
    </div>
  )
}

export default Rating
