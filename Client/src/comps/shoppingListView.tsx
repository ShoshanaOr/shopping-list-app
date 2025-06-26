// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../store'
import QuantityControl from './quantityControl'
import { removeItem } from '../features/shoppingList/shoppingListSlice'
import { useEffect } from 'react'

export default function ShoppingListView() {

  const items = useSelector((state: RootState) => state.shoppingList.items)
  const categories = useSelector((state: RootState) => state.categories.categories)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      {
        categories.map(category => {
          const productsInCategory = items.filter(item => item.category === category.name)
          if (productsInCategory.length === 0) return null
          return(
            <div key={category._id}>
              <h3>{category.name}</h3>
                <ul>
              {productsInCategory.map(prod => (
                <li key={prod.id}>
                  <button onClick={() => dispatch(removeItem(prod.id))}>❌</button>
                  {prod.product} <QuantityControl prodId={prod.id} quantity={prod.quantity}/>
                </li>
              ))}
            </ul>  
            </div>
          )
        })
      }
    </div>
  )
}
