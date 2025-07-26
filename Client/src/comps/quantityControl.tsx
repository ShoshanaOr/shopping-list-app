import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store'
import {increaseQuantity, decreaseQuantity} from '../features/shoppingList/shoppingListSlice'
import { Box, Grid } from '@mui/material'

interface  QuantityControlProps {
  prodId: string
  quantity: number
}

export default function QuantityControl({prodId, quantity}:QuantityControlProps) {

  const dispatch = useDispatch<AppDispatch>()

  return (
    <Box display="flex" alignItems="center" 
    sx={{gap:1, minWidth: 'fit-content', flexShrink: 0 }} >
      <button onClick={() => dispatch(decreaseQuantity(prodId))}>-</button>
      <div>{quantity}</div>
      <button onClick={() => dispatch(increaseQuantity(prodId))}>+</button>
    </Box>
   
  )
}
