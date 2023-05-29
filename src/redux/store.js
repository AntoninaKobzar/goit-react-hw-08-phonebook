import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { contacts } from './contacts/contactsSlice';
import { filter } from './contacts/filterSlice';
import { authReducer } from './auth/slice';

// const enhancer = devToolsEnhancer();
export const store = configureStore({
  reducer: {
    contacts,
    filter,
    auth: authReducer,
  },
});
