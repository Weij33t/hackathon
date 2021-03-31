import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shop } from '../../data'

import { buyItem, reducePoints } from '../../redux/User/actionCreator.js'
import c from './Shop.module.sass'
import button from '../../UI/Button.module.sass'

function Shop() {
  const userState = useSelector((state) => state.user)
  const [items, changeItems] = useState(shop)
  const dispatch = useDispatch()

  const buyGood = (itemIndex) => {
    const newItems = [...items]
    const item = { ...newItems[itemIndex] }
    item.count -= 1
    console.log(item.count)
    const itemCost = newItems[itemIndex].cost
    const itemName = newItems[itemIndex].title
    dispatch(buyItem(itemName, itemCost))
    dispatch(reducePoints(itemCost))
    changeItems([...newItems])
  }

  return (
    <div className={`container ${c.Shop}`}>
      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        Ваш баланс: {userState.points}
      </div>
      {items.map((item, index) => {
        return (
          <div className={c.Item} key={item.title}>
            <div className={c.ItemInner}>
              <div className={c.Img}>
                <span className={item.icon}></span>
              </div>
              <div className={c.TextContent}>
                <div className={c.ItemTitle}>{item.title}</div>
                <div className={c.Cost}>
                  Стоимость <span>{item.cost}</span>
                </div>
                <div className={c.Count}>
                  Осталось: <span>{item.count}</span>
                </div>
              </div>
            </div>
            <button
              disabled={
                item.count === 0 ||
                userState.points < +item.cost.substring(0, 2)
              }
              className={button.Button}
              onClick={() => buyGood(index)}
            >
              Купить
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Shop
