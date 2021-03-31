import React from 'react'
import Quiz from '../Quiz/Quiz'

import c from './Safe.module.sass'

function Safe() {
  return (
    <div className={`${c.Safe} container`}>
      <h1>Тест на знание техники безопасности</h1>
      <h2>
        Нам очень важно убедиться в том, что в чрезвычайных ситуациях вы сможете
        что то сделать.
      </h2>
      <div className={c.Rules}>
        <div className={c.Title}>
          Вдумчиво прочитайте правила, а затем пройдите тест на их знание:
        </div>
        <li className={c.Rule}>
          1. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem
        </li>
        <li className={c.Rule}>
          2. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem
        </li>
        <li className={c.Rule}>
          3. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem
        </li>
        <li className={c.Rule}>
          4. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem
        </li>
        <li className={c.Rule}>
          5. Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem
        </li>
      </div>
      <Quiz type="safe" />
    </div>
  )
}

export default Safe
