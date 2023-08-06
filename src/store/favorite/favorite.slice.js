import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorites: (state,action) => {
            const recipe = action.payload
            const isExsist = state.some(r => r.id === recipe.id)
            if(isExsist){
                const index = state.findIndex(item => item.id === recipe.id)

                if(index !== -1){
                    state.splice(index,1)
                }
            } else {
                state.push(recipe)
            }
        }
    }
})

export const {actions, reducer} = favoriteSlice