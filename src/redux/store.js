import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './contacts/contactsSlice';
import { filter } from './contacts/filterSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    auth: authReducer,
  },
});
