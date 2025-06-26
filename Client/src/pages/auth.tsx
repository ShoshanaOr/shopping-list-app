import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container, Typography, Button, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import { setUser, type UserState } from '../features/user/userSlice';
import axios from 'axios';


export default function Auth() {

   const dispatch = useDispatch<AppDispatch>()
   const navigate = useNavigate()

  const [fullName, setFullName] = React.useState('');
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');

  const [isLoginMode, setIsLoginMode] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleRegister = async() =>{
    try{
      const res = await axios.post<UserState>('http://localhost:3000/user',{
        fullName,
        email,
        password
      })
      const user = res.data
      console.log(user);
      if(user){
        dispatch(setUser(user))
       navigate('/shoppingList', { state: { user } })
      }else{
        alert('לא התקבל משתמש')
      }
      
    }catch(err: any){
      console.error('Registration error:', err);
       alert('הרשמה נכשלה: ' + (err.response?.data?.message || 'נסה שוב'));
    }
  }

  const handleLogin = async () => {
    try{
      const res = await axios.post<UserState>('http://localhost:3000/login', {
         email,
        password
      })
      const user: UserState = res.data
      console.log(user);
      
      if(user){
        dispatch(setUser(user))
      // navigate('/shoppingList')
      }else {
        alert('ההתחברות נכשלה – פרטי המשתמש אינם תקינים')
      }
      
    }catch  (err: any){
       console.error('Login error:', err);
    alert('התחברות נכשלה: ' + (err.response?.data?.message || 'נסה שוב'));
    }
  }

  return (
<Container>
  <Typography variant="h5" align="center" gutterBottom>
  {isLoginMode ? 'התחברות' : 'הרשמה'}
</Typography>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      {!isLoginMode && (
      <TextField id="outlined-basic" label="שם מלא" variant="outlined" 
      value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      )}
      <br/>
      <TextField id="outlined-basic" label="אימייל" variant="outlined" 
      value={email}
      onChange={(e) =>setEmail(e.target.value)}
      />

    </Box>
     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">סיסמה</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="סיסמה"
          />
        </FormControl>
        <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={isLoginMode ? handleLogin : handleRegister}          
        >
          {isLoginMode ? 'התחבר' : 'הרשם'}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setIsLoginMode((prev) => !prev)}
        >
          {isLoginMode ? 'אין לך חשבון? הרשם כאן' : 'כבר רשום? התחבר כאן'}
        </Button>
      </Stack>
        </Container>
  )
}
