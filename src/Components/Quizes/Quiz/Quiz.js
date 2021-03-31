import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import data from '../../../data.js'
import {
  addPoints,
  addTest,
  addResults,
} from '../../../redux/User/actionCreator.js'

import button from '../../../UI/Button.module.sass'
import c from './Quiz.module.sass'

function Quiz(props) {
  const [points, setPoints] = useState({ total: 0, earned: 0 })
  const user = useSelector((state) => state.user)
  const testResults = user.testResults[props.type] ?? []
  const [conf, setConf] = useState(testResults)
  const isAccepted =
    user.acceptedTests.indexOf(props.type) === -1 ? false : true
  const dispatch = useDispatch()
  const [isShow, switchShow] = useState(isAccepted)
  const content = data[props.type]
  let totalPts = 0
  let earnedPts = 0

  const userAnswer = (taskIndex, { point, answerId }, userAnswer) => {
    const newObj = [...conf]

    newObj[taskIndex] = {
      ...newObj[taskIndex],
      userAnswer,
      isRight: answerId === userAnswer,
      point: +point.substring(0, 2),
    }
    setPoints({
      total: totalPts,
      earned: earnedPts,
    })
    dispatch(addResults(props.type, newObj))
    setConf(newObj)
  }

  const showResults = () => {
    let earnedPts = 0
    let totalPts = 0
    conf.forEach((item) => (earnedPts += item.isRight ? item.point : 0))
    conf.forEach((item) => (totalPts += item.point))
    switchShow(true)
    dispatch(addPoints(earnedPts))
    dispatch(addTest(props.type))
  }
  return (
    <div className={c.Quiz}>
      <div style={{ textAlign: 'center', fontSize: '30px', marginTop: '10px' }}>
        {user.acceptedTests.indexOf(props.type) === -1 ? '' : 'Вы прошли тест'}
      </div>
      <div>
        {content.map((task, taskIndex) => {
          totalPts += +task.point.substring(0, 2)
          return (
            <div
              key={task + taskIndex}
              className={`${c.Task} ${
                isShow ? (conf[taskIndex]?.isRight ? c.Right : c.Wrong) : null
              }`}
            >
              <div className={c.TaskTitle}>
                {task.title}.{task.point}
              </div>
              <div className={c.Questions}>
                {task.questions.map((question, index) => {
                  return (
                    <label key={question + index} className={c.Question}>
                      <input
                        type="radio"
                        name={task.title}
                        defaultChecked={conf[taskIndex]?.userAnswer ?? false}
                        disabled={isShow}
                        onChange={() => userAnswer(taskIndex, task, index)}
                      />
                      <span>
                        {question}{' '}
                        {isShow && index === task.answerId ? (
                          <span
                            style={{ color: 'green', fontSize: '25px' }}
                            className="icon-check"
                          ></span>
                        ) : null}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      {!isShow ? (
        <button
          onClick={() => showResults()}
          className={`${c.Check} ${button.Button}`}
          disabled={isShow}
        >
          Проверить
        </button>
      ) : (
        <NavLink to={'/tests'}>
          <button className={`${button.Button}`}>Отправить результаты</button>
        </NavLink>
      )}
    </div>
  )
}

export default Quiz
