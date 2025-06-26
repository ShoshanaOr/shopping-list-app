import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction } from "@reduxjs/toolkit";

export interface UserState{
  _id: string
  fullName: string
  email: string
  password: string
}

const initialState: UserState = {
  _id: '',
  fullName: '',
  email: '',
  password: ''
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state , action: PayloadAction<UserState>){
      if (!action.payload?._id) return;
      state._id = action.payload._id;
  state.fullName = action.payload.fullName;
  state.email = action.payload.email;
  state.password = action.payload.password;
    },
    clearUser(){
      return {
    _id: '',
    fullName: '',
    email: '',
    password: ''
  };
    }
  },
})

export const {setUser, clearUser} = UserSlice.actions
export default UserSlice.reducer