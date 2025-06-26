
import { Category, CategoryModel } from "../models/category.model";

export const getAllCategories = async():Promise<Category[]> =>{
  return await CategoryModel.find()
}

export const insertManyCategories = async (categories: Category[]): Promise<void> => {
  await CategoryModel.insertMany(categories);
};
