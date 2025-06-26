import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AppShoppingList from './comps/appShoppingList'
import Auth from './pages/auth'
import MyLists from './pages/myLists'

export default function AppRoutes() {
  return (   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shoppingList' element={<AppShoppingList/>}>Shopping List</Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/myLists' element={<MyLists/>}></Route>
    </Routes>
  )
}
