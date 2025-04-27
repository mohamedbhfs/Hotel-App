import { configureStore } from '@reduxjs/toolkit';
import { informationpersonellereducers } from './informationpersonelleslice';
import { favoritereducers } from './favoriteslice';

const store = configureStore({
    reducer:{
        informationpersonellereducers:informationpersonellereducers,
        favoritereducers:favoritereducers,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;

