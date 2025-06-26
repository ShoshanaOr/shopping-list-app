import { Category } from "../models/category.model";
import { getAllCategories, insertManyCategories } from "../repositories/category.repository";

export const getAll = async():Promise<Category[]> =>{
  return await getAllCategories()
}

export const seedCategories =async ():Promise<void> => {
  const existing = await getAllCategories()
  if(existing.length === 0){
    await insertManyCategories([
      { name: 'מוצרי ניקיון' },
      { name: 'מוצרי חלב' },
      { name: 'פירות וירקות' },
      { name: 'מאפים' },
      { name: 'בשר ודגים' },
    ])
    console.log(' קטגוריות הוזנו למסד');
  } else {
    console.log('קטגוריות כבר קיימות במסד');
  }
}