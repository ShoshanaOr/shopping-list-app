import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { type AppDispatch } from '../store';
import { setCategories } from '../features/shoppingList/categoriesSlice';
import axios from 'axios';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface CategoryItem {
  _id: string
  name: string
}

interface  AddItemProps {
  onAddItem: (item: { product: string; category: string }) => void;
};

export default function AddItem({onAddItem}:AddItemProps) {

  const dispatch = useDispatch<AppDispatch>()

   useEffect(() => {
    // const url = 'http://localhost:3000/categories'
    const url = `${import.meta.env.VITE_API_URL}/categories`
    axios.get<CategoryItem[]>(url)
      .then(res => {
        console.log(res.data);       
        dispatch(setCategories(res.data))         
        setCategoriesLocal(res.data)            
      })
      .catch(err => {
        console.error('בעיה בטעינת קטגוריות', err)
      })
  }, [dispatch])

   const [categories, setCategoriesLocal] = useState<CategoryItem[]>([])
  const [product, setProduct] = useState('')
  const [category, setCategory] = useState('')
  // const categories = useSelector((state: RootState) => state.categories.categories)
  // console.log(categories);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
  if (!product.trim() || !category){
    alert('נא למלא שם מוצר וקטגוריה')
    return
  }
  onAddItem({product, category})
  setProduct('')
  setCategory('')
  }

  return (
    <Box  sx={{p:4, maxWidth: 700, margin:'0 auto'}}>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent={"center"}>
       
        
        <TextField 
        id="outlined-basic" 
        label="שם מוצר" 
        variant="outlined" 
        value={product}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct(e.target.value)}
        />

        

         <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="קטגוריה"
          onChange={(e) => setCategory(e.target.value as string)}
          // onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
        >
          {/* <MenuItem value={""}>Ten</MenuItem> */}

          {categories?.map(cat => (
            
            <MenuItem key={cat._id}
            value={cat.name}
            >{cat.name}</MenuItem>
          )
          )}
        </Select>
      </FormControl>
    </Box>
      
      <button type='submit'>הוסף</button>
      </Grid>
    </form>
    </Box>
  )
}






// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import type { SelectChangeEvent } from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function SelectVariants() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="filled-required" label="product" variant="filled" />
//     </Box>
      
//       <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-filled-label"
//           id="demo-simple-select-filled"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
