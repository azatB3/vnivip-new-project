import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from 'entities/News';
import { MainPageNewsSchema } from '../types/MainPageNewsSchema';
import { fetchNewsPart } from '../services/fetchNewsPart';

const initialState: MainPageNewsSchema = {
    isLoading: false,
    error: undefined,
};

export const MainPageNewsSlice = createSlice({
    name: 'MainPageNewsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsPart.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.news = undefined;
            })
            .addCase(fetchNewsPart.fulfilled, (state, action: PayloadAction<News[]>) => {
                if (action.payload?.length) {
                    state.mainNews = action.payload.shift();
                    state.news = action.payload;
                }
                state.isLoading = false;
            })
            .addCase(fetchNewsPart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: MainPageNewsActions } = MainPageNewsSlice;
export const { reducer: MainPageNewsReducer } = MainPageNewsSlice;
