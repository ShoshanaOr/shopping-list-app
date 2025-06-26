import {Schema, Types} from 'mongoose'
import { Category } from './category.model';

export interface Product {
  product: string;
  category: string;
  quantity: number;
}

export const ProductSchema = new Schema<Product> ({
  product:{type: String, required: true},
  category: {type: String, required: true},
  quantity: {type: Number, required: true, default: 1}, 
},
{ versionKey: false }
);