import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import API from '../network/apis/APIs';
import { requestPayload } from '../utils/Constants';
import { toast } from "react-toastify";

export const getProducts = createAsyncThunk('getProducts', async (arg) => {
    try {
        // @ts-ignore
        const response = await API.getProducts({...arg, ...requestPayload});
        return response.data;
    } catch (err:any) {
        return err.response.data
    }
});

const slice = createSlice({
    name: 'product',
    initialState: {
        isProductPending: false,
        products: []
    },
    reducers: {
    },
    extraReducers: {

        [getProducts.pending.toString()]: (state, {payload}) => {
            state.isProductPending = true;
        },
        [getProducts.fulfilled.toString()]: (state, {payload}) => {
            state.isProductPending = false;
            state.products = payload.products;
        },
        [getProducts.rejected.toString()]: (state, {payload}) => {
            state.isProductPending = false;
        },

    },
});

export default slice.reducer;

export const {
} = slice.actions;
