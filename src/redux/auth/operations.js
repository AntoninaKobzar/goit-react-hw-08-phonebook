import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
console.log(res.data);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {}
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkApi) => {}
);
