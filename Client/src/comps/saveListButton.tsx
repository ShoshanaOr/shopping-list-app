// import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'
import { clearList } from '../features/shoppingList/shoppingListSlice';

 interface User {
  fullName: string;
  email: string;
  password: string;
  _id: string;
}
interface Props{
  user: User
}

export default function SaveListButton({user}: Props) {

  const items = useSelector((state: RootState) => state.shoppingList.items)
  const dispatch = useDispatch<AppDispatch>()

  const URL = 'http://localhost:3000/shopping-lists'

  const handleSave = async () => {
    console.log(items);
    console.log(user._id);
    
    try{
    const res = await axios.post(URL, {
  userId: user._id,
  items
})
  console.log('Saved list:', res.data);
  dispatch(clearList())
      alert('הרשימה נשמרה בהצלחה')
    }catch(err){
      console.log('error in save', err);
      alert('תקלה בשמירה , נסה שנית')
    }
  }

  return (
    <div>
    <button onClick={handleSave}>שמור</button>
    </div>
  )
}
