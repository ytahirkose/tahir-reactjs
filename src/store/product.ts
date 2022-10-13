import {
    createSlice,
    createAsyncThunk, PayloadAction,
} from '@reduxjs/toolkit';
import API from '../network/apis/APIs';
import { requestPayload } from '../utils/Constants';
import { toast } from "react-toastify";
import {Product} from "../models/Product";

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
        products: <Product[]>[],
        favouriteProducts: <Product[]>[]
    },
    reducers: {
        addFavourite: (state, action: PayloadAction<Product>) => {
            state.products = state.products.map((product) => product._id == action.payload._id?{...product, inFavourite: true}:product)
            const temp: Product[] = [];
            state.products.forEach((product:Product) => {
                if (product.inFavourite == true) {
                    temp.push(product)
                }
            });
            state.favouriteProducts = temp;
            window.localStorage.setItem('favouriteProducts', JSON.stringify(state.favouriteProducts));
            toast.dismiss();
            toast.success('added')
        },
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.products = state.products.map((product) => product._id == action.payload?{...product, inFavourite: false}:product)
            const temp: Product[] = [];
                state.products.map((product:Product) => {
                if (product.inFavourite == true) {
                    temp.push(product)
                }
            });
            state.favouriteProducts = temp;
            window.localStorage.setItem('favouriteProducts', JSON.stringify(state.favouriteProducts))
            toast.dismiss();
            toast.success('removed')
        }
    },
    extraReducers: {

        [getProducts.pending.toString()]: (state, {payload}) => {
            state.isProductPending = true;
        },
        [getProducts.fulfilled.toString()]: (state, {payload}) => {
            state.isProductPending = false;
            state.products = payload.products;

            if (window.localStorage.getItem('favouriteProducts')){
                // @ts-ignore
                state.favouriteProducts = JSON.parse<Product[]>(window.localStorage.getItem<string>('favouriteProducts')).map((product) => product)
            }

            state.products = state.products.map((product)=>{
                let isFavourite = false;
                state.favouriteProducts.map((favouriteProduct)=>product._id == favouriteProduct._id? isFavourite = true : null)
                return isFavourite? {...product, inFavourite: true} : product
            })
        },
        [getProducts.rejected.toString()]: (state, {payload}) => {
            state.isProductPending = false;
        },

    },
});

export default slice.reducer;

export const {
    addFavourite,
    removeFavourite
} = slice.actions;
