import { Request, Response } from "express";
import { getAll } from "../services/category.service";

export const getAllCategories = async(req: Request, res: Response) => {
  const categories = await getAll()
  res.json(categories)
}