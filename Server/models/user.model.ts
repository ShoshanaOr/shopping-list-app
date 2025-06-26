import {Schema, model} from 'mongoose'

export interface User {
  fullName: String;  
  email: String;
  password: String;
}

const UserSchema = new Schema<User>({
  fullName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}, 
},
 { versionKey: false }
)

export const UserModel = model<User>('User', UserSchema)
