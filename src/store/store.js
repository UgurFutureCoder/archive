import { configureStore } from "@reduxjs/toolkit";
import { reducer as FavoriteReducers } from "./favorite/favorite.slice";



export const store = configureStore({
    reducer: {
        favorite: FavoriteReducers
    }
})