import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Slice/authSlice";
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch