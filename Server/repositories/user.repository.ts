import { User, UserModel } from "../models/user.model";


export const findUserByEmail = async (email: string): Promise<User | null> => {
  return await UserModel.findOne({ email })
}


export const createUser = async(obj: User): Promise<User> => {
  const newUser = new UserModel(obj)
  return await newUser.save()
}