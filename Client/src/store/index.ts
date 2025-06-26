import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from '../features/shoppingList/shoppingListSlice'
import categoriesReducer from '../features/shoppingList/categoriesSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer:{
    shoppingList: shoppingListReducer,
    categories: categoriesReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch