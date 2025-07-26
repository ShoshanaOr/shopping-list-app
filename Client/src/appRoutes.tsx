import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AppShoppingList from './comps/appShoppingList'
import Auth from './pages/auth'
import MyLists from './pages/myLists'
import SmartList from './pages/smartList'

export default function AppRoutes() {
  return (   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shoppingList' element={<AppShoppingList/>}>Shopping List</Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/myLists' element={<MyLists/>}></Route>
      <Route path="/auth/:isLogin" element={<Auth />} />
      <Route path='smartList' element={<SmartList/>} />
    </Routes>
  )
}
