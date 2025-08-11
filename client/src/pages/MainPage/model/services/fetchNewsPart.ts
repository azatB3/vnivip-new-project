import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { News } from 'entities/News';

export const fetchNewsPart = createAsyncThunk<
    News[],
    void,
    ThunkConfig<any>
>(
    'pages/MainPage/fetchNews',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<News[]>('/news/part', {
                params: {
                    page: 1,
                    limit: 6,
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
