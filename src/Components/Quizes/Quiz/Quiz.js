import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import data from '../../../data.js'

import c from './Quiz.module.sass'

function Quiz(props) {
  const [conf, setConf] = useState({})
  const [isShow, switchShow] = useState(false)
  const content = data[props.type]

  const userAnswer = (taskIndex, rightAnswer, userAnswer) => {
    const newObj = { ...conf }
    newObj[taskIndex] = userAnswer
    setConf(newObj)
  }

  const showResults = () => {
    switchShow(true)
  }
  return (
    <div className={c.Quiz}>
      <div>{content.title}</div>
      <div>
        {content.map((task, taskIndex) => {
          return (
            <div
              className={`${c.Question} ${
                isShow
                  ? task.answerId === conf[taskIndex]
                    ? c.Right
                    : c.Wrong
                  : null
              }`}
            >
              <div>{task.title}</div>
              <div className={c.Questions}>
                {task.questions.map((question, index) => {
                  return (
                    <label>
                      <input
                        type="radio"
                        name={task.title}
                        onChange={() =>
                          userAnswer(taskIndex, task.answerId, index)
                        }
                      />
                      <span>{question}</span>
                    </label>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <button onClick={() => showResults()} className={c.Check}>
        Проверить
      </button>
    </div>
  )
}

export default Quiz
