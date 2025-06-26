// import React from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store'
import {increaseQuantity, decreaseQuantity} from '../features/shoppingList/shoppingListSlice'
import { Box } from '@mui/material'

interface  QuantityControlProps {
  prodId: string
  quantity: number
}

export default function QuantityControl({prodId, quantity}:QuantityControlProps) {

  const dispatch = useDispatch<AppDispatch>()

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <button onClick={() => dispatch(decreaseQuantity(prodId))}>-</button>
      <div>{quantity}</div>
      <button onClick={() => dispatch(increaseQuantity(prodId))}>+</button>
    </Box>
  )
}
