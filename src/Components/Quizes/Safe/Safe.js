import axios from 'axios'
import React from 'react'
import { rules } from '../../../data'
import Quiz from '../Quiz/Quiz'

import c from './Safe.module.sass'

function Safe() {
  const data = axios.get(
    'https://hackathon-weij33t-default-rtdb.firebaseio.com/'
  )
  return (
    <div className={`${c.Safe} container`}>
      <h1>Тест на знание техники безопасности</h1>
      <h2>
        Нам важно убедиться в том, что в чрезвычайных ситуациях вы сможете найти
        правильное решение.
      </h2>
      <div className={c.Rules}>
        <div className={c.Title}>
          Вдумчиво прочитайте правила, а затем пройдите тест на их знание:
        </div>
        {rules.map((rule, index) => (
          <li className={c.Rule} key={rule}>
            {index + 1 + '. ' + rule}
          </li>
        ))}
      </div>
      <Quiz type="Техника безопасности" />
    </div>
  )
}

export default Safe
