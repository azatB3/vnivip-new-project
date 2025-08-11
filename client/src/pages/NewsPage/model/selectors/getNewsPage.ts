import { StateSchema } from 'app/providers/StoreProvider';

export const getNewsPageMainNews = (state: StateSchema) => state.newsPage?.mainNews;
export const getNewsPageIsLoading = (state: StateSchema) => state.newsPage?.isLoading ?? false;
export const getNewsPagePage = (state: StateSchema) => state.newsPage?.page ?? 1;
export const getNewsPageHasMore = (state: StateSchema) => state.newsPage?.hasMore;
