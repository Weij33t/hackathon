import React, { useState } from 'react'

import c from './Form.module.sass'
import input from '../../UI/Input.module.sass'
import btn from '../../UI/Button.module.sass'
import { useDispatch } from 'react-redux'

function Form() {
  const [inputs, getValues] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const authUser = ({ email, password }) => {
    console.log(email, password)
    if (!password.length < 6) {
      // dispatch(auth(email, password))
    }
  }

  return (
    <div className={`container ${c.Form}`}>
      <div className={c.Overlay}></div>
      <div className={c.Title}>Войдите в систему</div>
      <div className={c.FormInner}>
        <input
          type="email"
          className={input.Input}
          onChange={(e) => getValues({ ...inputs, email: e.target.value })}
        />
        <input
          type="password"
          className={input.Input}
          onChange={(e) => getValues({ ...inputs, password: e.target.value })}
        />
        <button className={btn.Button} onClick={() => authUser(inputs)}>
          Войти
        </button>
      </div>
    </div>
  )
}

export default Form
