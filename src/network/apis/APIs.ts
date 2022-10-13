import {axiosInstance} from './index';
import {Product} from "../../models/Product";

const createSession = async () => {
    return {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl0YWhpcmtvc2VAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3l0YWhpcmtvc2UiLCJpYXQiOjE2NjUzMzgyNTgsImV4cCI6MTY2NTc3MDI1OH0.wa8AQZISmjF8PIoeyOmTp8ECR_nfOsubZ5ux5E3qhDo'
    };
};

const getProducts = async () => {
    const response = await axiosInstance.get(`/products`);
    return response;
};

const getSelectedProducts = async (data: string) => {
    const response = await axiosInstance.get(`/products/${data}`);
    return response;
};

const addProduct = async (data: Product) => {
    const response = await axiosInstance.post(`/products`, data);
    return response;
};

const getCategories = async () => {
    const response = await axiosInstance.get(`/categories`);
    return response;
};

const getSelectedCategory = async (data: string) => {
    const response = await axiosInstance.get(`/categories/${data}`);
    return response;
};

export default {
    createSession,
    getProducts,
    getSelectedProducts,
    addProduct,
    getCategories,
    getSelectedCategory
};
