import React from 'react'

import c from './User.module.sass'

function User(props) {
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/350x150.jpg" alt="placeholder" />
      </div>
      <div className={c.TextContent}>
        <div className={c.Name}>{props.name}</div>
        <div className={c.Degree}>{props.degree}</div>
        <div className={c.Name}>{props.resume}</div>
      </div>
    </div>
  )
}

export default User
