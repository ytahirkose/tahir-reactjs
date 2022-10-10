import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import API from '../network/apis/APIs';
import { requestPayload } from '../utils/Constants';
import { toast } from "react-toastify";

export const getCategories = createAsyncThunk('getCategories', async (arg) => {
    try {
        // @ts-ignore
        const response = await API.getCategories({...arg, ...requestPayload});
        return response.data;
    } catch (err:any) {
        return err.response.data
    }
});

const slice = createSlice({
    name: 'category',
    initialState: {
        isCategoriesPending: false,
        categories: []
    },
    reducers: {
    },
    extraReducers: {

        [getCategories.pending.toString()]: (state, {payload}) => {
            state.isCategoriesPending = true;
        },
        [getCategories.fulfilled.toString()]: (state, {payload}) => {
            state.isCategoriesPending = false;
            state.categories = payload.categories;
        },
        [getCategories.rejected.toString()]: (state, {payload}) => {
            state.isCategoriesPending = false;
        },

    },
});

export default slice.reducer;

export const {
} = slice.actions;
