import { Request, Response } from "express"
import * as userService from "../services/user.service";

export const loginUser = async (req: Request, res: Response) => {
  try{
    const {email,password} = req.body
    const user = await userService.login(email, password)
    res.status(201).json(user)
  }catch(err: any){
    console.error('Login error:', err)
    res.status(401).json({ message: err.message || 'שגיאה בהתחברות' })
  }
}


export const createUser = async (req: Request, res: Response) => {
  try {
    
    // const newUser = await userService.create(req.body);
    const obj = req.body
    const newUser = await userService.createNewUser(obj)

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
}