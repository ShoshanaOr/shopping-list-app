// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../store'
import QuantityControl from './quantityControl'
import { removeItem } from '../features/shoppingList/shoppingListSlice'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';

export default function ShoppingListView() {

  const items = useSelector((state: RootState) => state.shoppingList.items)
  const categories = useSelector((state: RootState) => state.categories.categories)
  const dispatch = useDispatch<AppDispatch>()


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

  return (
    <div>
 <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        
        
      {categories.map(category => {
        const productsInCategory = items.filter(item => item.category === category.name)
        if (productsInCategory.length === 0) return null
        return (
    
     <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category._id}>
   <Stack spacing={2}>
    <h3>{category.name}</h3>
    {productsInCategory.map(prod => (
      <Item key={prod.id}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <button onClick={() => dispatch(removeItem(prod.id))}>❌</button>
          <span style={{ marginInline: '8px' }}>{prod.product}</span>
          <QuantityControl prodId={prod.id} quantity={prod.quantity} />
        </Box>
      </Item>
     
    ) )}
  </Stack>
  </Grid>

        )
      })}
     </Grid>
    </Box>
         
      
    </div>
  )
}
