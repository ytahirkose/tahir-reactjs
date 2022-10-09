import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import API from '../network/apis/APIs';
import { requestPayload } from '../utils/Constants';
import { toast } from "react-toastify";
import Cookies from "js-cookie";

//On real projects this async operation should use, for this case project work reducers.
export const createSession = createAsyncThunk('createSession', async (arg) => {

  try {
    // @ts-ignore
    const response = await API.createSession({...arg, ...requestPayload});
    return response.data;
  } catch (err:any) {
    return err.response.data
  }
});

const slice = createSlice({
  name: 'auth',
  initialState: {
    isPending: false,
    user: null,
    inviteUser: false,
  },
  reducers: {
    setUser: (state, action) => {
    },
    removeUser: (state, action) => {
    }
  },
  extraReducers: {

    [createSession.pending.toString()]: (state, {payload}) => {
    },
    [createSession.fulfilled.toString()]: (state, {payload}) => {
    },
    [createSession.rejected.toString()]: (state, {payload}) => {
    },

  },
});

export default slice.reducer;

export const {
  setUser,
  removeUser
} = slice.actions;
