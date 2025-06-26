import mongoose from "mongoose";
import { ShoppingList, ShoppingListModel } from "../models/shoppingList.model";
import { Product } from "../models/product.model";

export const getAllShoppingLists = async () :Promise<ShoppingList[]> => {
  return await ShoppingListModel.find();
}

export const getShoppingListById = async (id: string): Promise<ShoppingList | null> =>{
  return await ShoppingListModel.findById(id);
}

// export const createShoppingList = async (obj: ShoppingList): Promise<ShoppingList> => {
//   const newShoppingList = new ShoppingListModel(obj)
//   return await newShoppingList.save();
// }

export const createShoppingList = async (
  obj: { userId: string; items: Product[] }
): Promise<any> => {
  const userObjectId = new mongoose.Types.ObjectId(obj.userId)
  const newShoppingList = new ShoppingListModel({
    userId: userObjectId,
    items: obj.items
  });
  return await newShoppingList.save();
};


export const updateShoppingList = async (id: string, obj: Partial<ShoppingList>): Promise<void> =>{
  await ShoppingListModel.findByIdAndUpdate(id, obj);
}

export const deleteShoppingList = async (id: string): Promise<void> =>{
  await ShoppingListModel.findByIdAndDelete(id);
}

export const getShoppingListWithUser = async (id: string): Promise<ShoppingList | null > =>{
  return await ShoppingListModel.findById(id).populate('userId')
}

export const getShoppingListsByUserId = async (userId: string): Promise<ShoppingList[]> => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
  throw new Error("Invalid userId");
}
  return await ShoppingListModel.find({userId: new mongoose.Types.ObjectId(userId)})
}