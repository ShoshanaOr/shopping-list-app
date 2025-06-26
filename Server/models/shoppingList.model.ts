import mongoose, {Schema, model} from 'mongoose'
import { ProductSchema } from './product.model'

export interface ShoppingList {
  userId: mongoose.Types.ObjectId;
  items: typeof ProductSchema[];
  createdAt: Date;
}

const ShoppingListSchema = new Schema<ShoppingList>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true      
    },
  
  items: {type: [ProductSchema], required: true},
  createdAt: {type: Date, default: Date.now },
},
{ versionKey: false }
)

export const ShoppingListModel = model<ShoppingList>('ShoppingList', ShoppingListSchema)