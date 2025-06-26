import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CategoryItem{
  _id: string
  name: string
}

interface CategoriesState {
  categories: CategoryItem[];
  // loading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  // loading: false,
}

// export const fetchCategories = createAsyncThunk<CategoryItem[]>(
//   'categories/fetchCategories',
//   async (): Promise<CategoryItem[]> => {
//     const response = await axios.get<CategoryItem[]>('http://localhost:3000/categories')
//     console.log(response.data);
//     return response.data
//   }
// )

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<CategoryItem[]>) {
      state.categories = action.payload
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCategories.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchCategories.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.categories = action.payload;
  //     })
  //     .addCase(fetchCategories.rejected, (state) => {
  //       state.loading = false;
  //     });
   },
})

export const { setCategories } = categoriesSlice.actions
export default categoriesSlice.reducer