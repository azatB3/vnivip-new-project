import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchNews } from './fetchNews';
import { getNewsPageHasMore, getNewsPageIsLoading } from '../selectors/getNewsPage';

interface FetchNewsArgs {
    limit: number;
}

export const fetchNewsNextPage = createAsyncThunk<
    void,
    FetchNewsArgs,
    ThunkConfig<any>
>(
    'pages/NewsPage/fetchNewsNextPage',
    async ({ limit }, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;
        const hasMore = getNewsPageHasMore(getState());
        const isLoading = getNewsPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(fetchNews({ limit }));
        }
    },
);
