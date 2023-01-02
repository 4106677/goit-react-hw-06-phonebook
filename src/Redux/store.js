import { configureStore } from '@reduxjs/toolkit';

import { filtersReducer } from './filterSlice';
import { contactSlice } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filters: filtersReducer,
  },
});
