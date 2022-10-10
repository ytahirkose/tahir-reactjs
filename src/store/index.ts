import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from "./auth";
import product from "./product";
import category from "./category";

export const reducer = combineReducers({
  auth,
  product,
  category
});

const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
