import {
    createSlice,
    createAsyncThunk, PayloadAction,
} from '@reduxjs/toolkit';
import API from '../network/apis/APIs';
import { requestPayload } from '../utils/Constants';
import { toast } from "react-toastify";
import {Product} from "../models/Product";

interface Values {
    name: string,
    price: number,
    description: string,
    category: string,
    avatar: string,
    developerEmail: string,
}


export const getProducts = createAsyncThunk('getProducts', async (arg) => {
    try {
        // @ts-ignore
        const response = await API.getProducts({...arg, ...requestPayload});
        return response.data;
    } catch (err:any) {
        return err.response.data
    }
});

export const addProduct = createAsyncThunk('addProduct', async (arg: Values) => {
    try {
        // @ts-ignore
        const response = await API.addProduct({...arg, ...requestPayload});
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
        favouriteProducts: <Product[]>[],
        productsAsCategory: <Product[]>[],
        selectedCategory: 'All Categories',
        selectedProduct: <Product>{}
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
            toast.success('added');
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
        },
        setProductAsCategory: (state, action: PayloadAction<string>) => {
            action.payload == '' ? state.selectedCategory = 'All Categories' : state.selectedCategory = action.payload;
            const temp: Product[] = [];
            state.products.map((product:Product) => {
                if (product.category == state.selectedCategory) {
                    temp.push(product)
                }
            });
            state.productsAsCategory = action.payload==''?state.products:temp;
        },
        setSelectedProduct: (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload
        },
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
            state.productsAsCategory = state.products;
        },
        [getProducts.rejected.toString()]: (state, {payload}) => {
            state.isProductPending = false;
        },

        [addProduct.pending.toString()]: (state, {payload}) => {
            state.isProductPending = true;
        },
        [addProduct.fulfilled.toString()]: (state, {payload}) => {
            state.isProductPending = false;
            toast.dismiss();
            toast.success('completed')
        },
        [addProduct.rejected.toString()]: (state, {payload}) => {
            state.isProductPending = false;
        },

    },
});

export default slice.reducer;

export const {
    addFavourite,
    removeFavourite,
    setProductAsCategory,
    setSelectedProduct
} = slice.actions;
