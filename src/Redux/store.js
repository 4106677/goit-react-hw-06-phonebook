import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

// import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';
import { filtersSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersSlice.reducer,
  },
});

export const persistor = persistStore(store);
