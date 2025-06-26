import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'
import { clearList } from '../features/shoppingList/shoppingListSlice';
import { Button } from '@mui/material';

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

  // const url = 'http://localhost:3000/shopping-lists'
  const url = `${import.meta.env.VITE_API_URL}/shopping-lists`

  const handleSave = async () => {
    console.log(items);
    console.log(user._id);
    
    try{
    const res = await axios.post(url, {
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
      <Button
      variant="contained"
      color="primary"
      onClick={handleSave}
      sx={{ m: 2 , mt:4}}
    >
      שמור רשימה
    </Button>
    </div>
  )
}
