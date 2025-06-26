import { model, Schema } from "mongoose";

export interface Category{
  name: string;
}

const CategorySchema = new Schema<Category>({
  name:{type: String, required: true},
},
{ versionKey: false }
)

export const CategoryModel = model<Category>('Category', CategorySchema)