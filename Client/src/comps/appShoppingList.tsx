import React, { useEffect, useState } from 'react'
import AddItem from './addItem'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { addItem } from '../features/shoppingList/shoppingListSlice';
import ShoppingListView from './shoppingListView';
import SaveListButton from './saveListButton';
import { useLocation } from 'react-router-dom';

export default function AppShoppingList() {

  
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) => state.shoppingList.items)
  //  const user = useSelector((state: RootState)=> state.user)
  // const [currentUser, setCurrentUser] = useState(user)
  const location = useLocation()
  const user = location.state?.user
  const handleAddItem = (item : {product: string, category: string}) => {
    console.log(item);
    dispatch(addItem(item))
  }
  return (
    <div>
      <h1>רשימת קניות</h1>
      <h2>סה"כ: {items.length} מוצרים</h2>
      {user && <h5>שלום ל {user.fullName}</h5>}
      
      <AddItem onAddItem={handleAddItem}/>
      {items.length > 0 ? (
        <>
      <ShoppingListView/> 
      <SaveListButton user={user}/>
    </>
    ) : 
      <p>הרשימה ריקה</p>}
    </div>
  )
}
