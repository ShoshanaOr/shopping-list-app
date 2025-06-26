import { Request, Response } from "express";
import * as ShoppingListService from '../services/shoppingList.service'

export const getAll = async(req: Request, res: Response) => {
  const lists = await ShoppingListService.getAll()
  res.json(lists)
}

export const getById = async (req: Request, res: Response) =>{
  const {id} = req.params
  const list = await ShoppingListService.getById(id)
  res.json(list)
}

// export const create = async (req: Request, res: Response) => {
//   const {obj} = req.body
//   const newList = await ShoppingListService.create(obj)
//   res.status(201).json(newList)
// }
export const createList = async (req: Request, res: Response) => {
  const {userId, items} = req.body
  try{
    const newList = await ShoppingListService.create({userId, items})
    console.log('Saved shopping list:', newList)
    console.log('userId sent from client:', userId);
console.log('type of userId:', typeof userId);
    res.status(201).json(newList)
  }catch(error){
    console.error('Error creating shopping list:', error)
     res.status(500).json({ message: 'Failed to create shopping list' });
  }
}

export const update = async (req: Request, res: Response) =>{
  const {id} = req.params
  const {obj} = req.body
  return await ShoppingListService.update(id, obj)
  res.status(204).send()
}

export const remove = async (req: Request, res: Response) => {
  const {id} = req.params
  return await ShoppingListService.remove(id)
  res.status(204).send()
}

// שליפה עם משתמש
export const getByIdWithUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const list = await ShoppingListService.getByIdWithUser(id);
  if (!list) return res.status(404).json({ message: 'Shopping list not found' });
  res.json(list);
};

// שליפה לפי מזהה משתמש
export const getByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const lists = await ShoppingListService.getByUserId(userId);
  res.json(lists);
};