import { createSlice } from '@reduxjs/toolkit';
const initialState : { favoritelist: number[] } = {
    favoritelist:[],
};

const favoriteslice = createSlice(

    {
        name:'favoriteslice',
        initialState,
        reducers:{
            addfavorite:(state,action)=>{
                state.favoritelist.push(parseInt(action.payload,10));
            },
            removefavorite:(state)=>{
                state.favoritelist.pop();
            },
        },

    }
);

export const {addfavorite} = favoriteslice.actions;
export const {removefavorite} = favoriteslice.actions;
export const favoritereducers = favoriteslice.reducer;
