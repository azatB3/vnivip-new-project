import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { UISchema } from 'features/UI';
import { rtkApi } from 'shared/api/rtkApi';
import { DeviceSchema } from 'entities/Device';
import { MainPageNewsSchema } from 'pages/MainPage';
import { NewsPageSchema } from 'pages/NewsPage';
import { NewsDetailsPageSchema } from 'pages/NewsDetailsPage';
import { AdministrationPageSchema } from 'pages/AdministrationPage';
import { AcademicCouncilPageSchema } from 'pages/AcademicCouncilPage';
import { CouncilYoungScientistsPageSchema } from 'pages/CouncilYoungScientistsPage';
import { ScienceDepartmentsPageSchema } from 'pages/ScienceDepartmentsPage';
import { CompetitionsPageSchema } from 'pages/CompetitionsPage';
import { VacanciesPageSchema } from 'pages/VacanciesPage';
import { ActsPageSchema } from 'pages/ActsPage';
import { ServicesPageSchema } from 'pages/ServicesPage';

export interface StateSchema {
    ui: UISchema;
    device: DeviceSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    // Асинхронные редюсеры
    mainPageNews?: MainPageNewsSchema,
    newsPage?: NewsPageSchema,
    newsDetailsPage?: NewsDetailsPageSchema,
    administrationPage?: AdministrationPageSchema,
    academicCouncilPage?: AcademicCouncilPageSchema,
    councilYoungScientistsPage?: CouncilYoungScientistsPageSchema,
    scienceDepartmentsPage?: ScienceDepartmentsPageSchema,
    competitionsPage?: CompetitionsPageSchema,
    vacanciesPage?: VacanciesPageSchema,
    actsPage?: ActsPageSchema,
    servicesPage?: ServicesPageSchema,
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
