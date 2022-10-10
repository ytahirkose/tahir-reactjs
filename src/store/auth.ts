import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import API from '../network/apis/APIs';
import { requestPayload } from '../utils/Constants';
import Cookies from "js-cookie";

export const createSession = createAsyncThunk('createSession', async (arg) => {
  // @ts-ignore
  const response = await API.createSession({...arg, ...requestPayload});
  return response.token;
});

const slice = createSlice({
  name: 'auth',
  initialState: {
    token: null
  },
  reducers: {},
  extraReducers: {
    [createSession.fulfilled.toString()]: (state, {payload}) => {
      Cookies.set('developerToken', payload)
      state.token = payload
    }
  },
});

export default slice.reducer;
export const {} = slice.actions;
