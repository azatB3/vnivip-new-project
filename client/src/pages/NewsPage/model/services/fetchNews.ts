import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { News } from 'entities/News';
import { getNewsPagePage } from 'pages/NewsPage/model/selectors/getNewsPage';

interface FetchNewsArgs {
    limit: number;
}

export const fetchNews = createAsyncThunk<
    News[],
    FetchNewsArgs,
    ThunkConfig<any>
>(
    'pages/NewsPage/fetchNews',
    async ({ limit }, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const page = getNewsPagePage(getState());

        try {
            const response = await extra.api.get<News[]>('/news/part', {
                params: {
                    page,
                    limit,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
