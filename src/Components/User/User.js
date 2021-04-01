import React from 'react'
import { useSelector } from 'react-redux'

import c from './User.module.sass'

function User(props) {
  const userState = useSelector((state) => state.user)
  console.log(userState.points)
  return (
    <div className={`container ${c.User}`}>
      <div className={c.Image}>
        <picture>
          <source
            srcSet="https://via.placeholder.com/200x250"
            media="(max-width: 600px)"
            alt="Avatar"
          />
          <img alt="Avatar" src="https://via.placeholder.com/350x500" />
        </picture>
      </div>
      <div className={c.TextContent}>
        <div className={c.Name}>
          {userState.name + ' ' + userState.secondName}
        </div>
        <div className={c.Degree}>{userState.degree}</div>
        <div className={c.Desc}>
          <div className={c.About}>{userState.desc}</div>
          <div>Занимаемая должность: {userState.level}</div>
          <div style={{ marginTop: '10px' }}>
            Пройденные тесты:{' '}
            {userState.acceptedTests.length === 0
              ? 'Ни один тест не пройден'
              : userState.acceptedTests.join(', ')}
          </div>
          <div style={{ marginTop: '10px' }}>
            Купленные льготы:{' '}
            {userState.purchased.length === 0
              ? '0 покупок'
              : userState.purchased.join(', ')}
          </div>
          <div className={c.Points}>
            Количество очков <span>{userState.points}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
