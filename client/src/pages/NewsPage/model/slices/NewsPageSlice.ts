import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { News } from 'entities/News';
import { StateSchema } from 'app/providers/StoreProvider';
import { NewsPageSchema } from '../types/NewsPageSchema';
import { fetchNews } from '../services/fetchNews';

const newsAdapter = createEntityAdapter<News>({
    selectId: (news) => news.id,
});

export const getNews = newsAdapter.getSelectors<StateSchema>(
    (state) => state.newsPage || newsAdapter.getInitialState(),
);

export const NewsPageSlice = createSlice({
    name: 'NewsPageSlice',
    initialState: newsAdapter.getInitialState<NewsPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action: PayloadAction<News[]>) => {
                if (!state.mainNews) {
                    state.mainNews = action.payload.shift();
                }
                newsAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length === 8;
                state.page += 1;
                state.isLoading = false;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: NewsPageActions } = NewsPageSlice;
export const { reducer: NewsPageReducer } = NewsPageSlice;
