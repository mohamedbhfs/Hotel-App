import { createSlice } from '@reduxjs/toolkit';
const initialState = {
        informationpersonelle:{
        name:'',
        age:'',
        email:'',
        password:'',
    },
};
const informationpersonelleslice = createSlice({
    name:'informationpersonelle',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.informationpersonelle = action.payload;
        },
    },
});
export const {login} = informationpersonelleslice.actions;
export const informationpersonellereducers = informationpersonelleslice.reducer;

