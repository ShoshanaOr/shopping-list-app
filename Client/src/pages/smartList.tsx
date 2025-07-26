import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import type { Item } from './myLists';

export default function SmartList() {

  const [prompt, setPrompt] = React.useState('')
  const [newList, setNewList] = React.useState([])
  const [why, setWhy] = React.useState('')
  const [participants, setParticipants] = React.useState('')
  const [what, setWhat] = React.useState('')
  
  const handleGenerate = async() => {
    const url = 'http://localhost:3000/'
    try{
      const res = await axios.post<Item[]>(url, {
      why, 
      participants,
      what,
    })
    console.log(res.data);   
    // setNewList(res.data)
    }catch(error){
      console.error('בעיה ביצירת הרשימה , נסה שוב',error)
      alert('בעיה ביצירת הרשימה , נסה שוב')
    }
    
  }

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" align="center"> רשימה ברגע בקלות ומהירות</Typography>
      <TextField id="outlined-basic-goal" label="למה" variant="outlined" 
      placeholder='מה סיבת הקניה ? שבועית / אירוע / אחר '
      value={why}
      onChange={(e) => setWhy(e.target.value)}
      />
      <TextField id="outlined-basic" label="כמה" variant="outlined" 
      placeholder='לכמה אנשים או משתתפים מיועדת הקניה'
      value={participants}
      onChange={(e) => setParticipants(e.target.value)}
      />     
      <TextField id="outlined-basic" label="מה" variant="outlined" 
      placeholder='פרט מהו סגנון התפריט הרצוי / מסיבה חלבית ? קינוחים? או כל פירוט אחר על סגנון המוצרים'
      value={what}
      onChange={(e) => setWhat(e.target.value)}
      />
      <Button onClick={handleGenerate}>צור רשימה</Button>
    </Box>
  )
}
