import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  return data;
});

const initialState = {
  products: [],
  isLoading: false,
  isError: false,

  // For Searching a Query
  searchTerm: "",
  filterData: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  // ============= for searching Query
  // reducers:{
  //     setSearchTerm(state,action){
  //         state.searchTerm = action.payload;
  //         state.filterData = state.products.filter((product)=>{
  //             product.title.slice(0,3).toLowerCase().includes(state.searchTerm.toLowerCase())
  //         })
  //     }
  // },
  //  =========== For API Calll
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setSearchTerm } = ProductSlice.actions;
export default ProductSlice.reducer;
