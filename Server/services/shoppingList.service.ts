import {
  getAllShoppingLists,
  getShoppingListById,
  createShoppingList,
  updateShoppingList,
  deleteShoppingList,
  getShoppingListWithUser,
  getShoppingListsByUserId,
} from '../repositories/shoppingList.repository';

import { ShoppingList } from '../models/shoppingList.model';
import { Product } from '../models/product.model';

export const getAll = async (): Promise<ShoppingList[]> => {
  return await getAllShoppingLists()
}

export const getById = async (id: string): Promise<ShoppingList | null> => {
  return await getShoppingListById(id)
}

// export const create = async (obj: ShoppingList): Promise<ShoppingList> =>{
//   return await createShoppingList(obj)
// }

export const create = async (
  obj: { userId: string; items: Product[] }
) => {
  return await createShoppingList(obj);
};


export const update = async (id: string, obj: Partial<ShoppingList>): Promise<void> =>{
  return await updateShoppingList(id, obj)
}

export const remove = async (id: string): Promise<void> =>{
  return await deleteShoppingList(id)
}

export const getByIdWithUser = async (id: string): Promise<ShoppingList | null> =>{
  return await getShoppingListWithUser(id)
}

export const getByUserId = async (userId: string):Promise<ShoppingList[]> =>{
  return await getShoppingListsByUserId(userId)
}