import React, { useEffect, useState } from 'react'
import AddItem from './addItem'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { addItem } from '../features/shoppingList/shoppingListSlice';
import ShoppingListView from './shoppingListView';
import SaveListButton from './saveListButton';
import { useLocation } from 'react-router-dom';
import { Box, Divider, Paper, Typography } from '@mui/material';

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
   
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        רשימת קניות
      </Typography>

      <Box
        sx={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',   mb: 3,flexWrap: 'wrap' }}
      >
        <Typography variant="h6" color="text.secondary">
          סה"כ: {items.length} מוצרים
        </Typography>
        {user && (
          <Typography variant="h6" color="primary">
            שלום {user.fullName}
          </Typography>
        )}
      </Box>


      <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
        <AddItem onAddItem={handleAddItem} />
      </Paper>

      {items.length > 0 ? (
        <>
          <Box  sx={{ p: 2, mb: 2 }}>
        <ShoppingListView />
          </Box>

          <Box textAlign="center" mt={2}>
          <SaveListButton user={user} />
          </Box>
        </>
      ) : (
        <Typography variant="body1" align="center" color="text.secondary">
          הרשימה ריקה
        </Typography>
      )}
    </Box>
  )
}
