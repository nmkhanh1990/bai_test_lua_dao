
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  loading: false,
};

export const fetchAsync = createAsyncThunk(
  'dataView/fetch',
  async (url) => {
    const response = await fetch(url)
    return response.json()
  }
);

export const dataViewSlice = createSlice({
  name: 'dataView',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        console.log('payload', action.payload)
        state.loading = false
        state.data = action.payload;
      });
  },
});

export const { loadData } = dataViewSlice.actions;

export const selectLoading = (state) => state.dataView.loading
export const selectData = (state) => state.dataView.data

export default dataViewSlice.reducer