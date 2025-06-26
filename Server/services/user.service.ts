import { User } from "../models/user.model"
import { createUser, findUserByEmail } from "../repositories/user.repository"

export const login = async (email: string, password: string): Promise<User> => {
  const user = await findUserByEmail(email)
  if (!user) {
    throw new Error('משתמש לא נמצא')
  }
  if (user.password !== password) {
    throw new Error('סיסמה שגויה')
  }
  return user
}

export const createNewUser = async (obj: User): Promise<User> =>{
  return await createUser(obj)
}