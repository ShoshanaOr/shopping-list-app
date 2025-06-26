import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction } from "@reduxjs/toolkit";

interface ShoppingItem{
  id: string
  product: string
  category: string
  quantity: number
}

interface ShoppingListState {
  items: ShoppingItem[]
}

const initialState: ShoppingListState = {
  items: [],
}

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{product: string; category: string}>){
      const existing = state.items.find(item => item.product === action.payload.product)
      if(existing) {
        existing.quantity += 1
      } else {
        state.items.push({
          id: crypto.randomUUID(),
          product: action.payload.product,
          category: action.payload.category,
          quantity: 1,
        })
      }
    },
    clearList(state) {
      state.items = []
    },
    increaseQuantity(state, action: PayloadAction<string>){
      const item = state.items.find(i => i.id === action.payload)
      if(item) item.quantity++
    },
    decreaseQuantity(state, action: PayloadAction<string>){
      const item = state.items.find(i => i.id === action.payload)
      if(item && item.quantity>1) item.quantity--
    },
    removeItem(state, action: PayloadAction<string>){
      state.items = state.items.filter(i => i.id !== action.payload)
    }
  },
})

export const {addItem, clearList, increaseQuantity, decreaseQuantity, removeItem} = shoppingListSlice.actions
export default shoppingListSlice.reducer