import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CategoryItem{
  _id: string
  name: string
}

interface CategoriesState {
  categories: CategoryItem[];
}

const initialState: CategoriesState = {
  categories: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<CategoryItem[]>) {
      state.categories = action.payload
  },
   },
})

export const { setCategories } = categoriesSlice.actions
export default categoriesSlice.reducer