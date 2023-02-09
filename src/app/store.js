import { configureStore } from '@reduxjs/toolkit';
import dataViewReducer from '../components/data_view/data_view_slice';

export const store = configureStore({
  reducer: {
    dataView: dataViewReducer,
  },
});
