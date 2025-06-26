// import React from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store'
import {increaseQuantity, decreaseQuantity} from '../features/shoppingList/shoppingListSlice'

interface  QuantityControlProps {
  prodId: string
  quantity: number
}

export default function QuantityControl({prodId, quantity}:QuantityControlProps) {

  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <button onClick={() => dispatch(decreaseQuantity(prodId))}>➖</button>
      <div>{quantity}</div>
      <button onClick={() => dispatch(increaseQuantity(prodId))}>➕</button>
    </div>
  )
}
