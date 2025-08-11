import { News } from 'entities/News';
import { EntityState } from '@reduxjs/toolkit';

export interface NewsPageSchema extends EntityState<News>{
    mainNews?: News;
    isLoading: boolean;
    error: string | undefined;
    page: number;
    hasMore: boolean;
}
