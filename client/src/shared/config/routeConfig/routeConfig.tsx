import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPageDesktop, MainPageMobile } from 'pages/MainPage';
import { NewsPageDesktop, NewsPageMobile } from 'pages/NewsPage';
import { NewsDetailsPageDesktop, NewsDetailsPageMobile } from 'pages/NewsDetailsPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    NEWS = 'news',
    NEWS_DETAILS = 'news_details',
    NOT_FOUND = 'not_found',
    // Админам
    ADMIN = 'admin',
}

export enum AppPaths {
    MAIN = '/',
    NEWS = '/news',
    NEWS_DETAILS = '/news/:id',
    NOT_FOUND = '*',
    // Админам
    ADMIN = '/admin',
}

export const RoutePath: Record<AppRoutes, AppPaths> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.NEWS]: AppPaths.NEWS,
    [AppRoutes.NEWS_DETAILS]: AppPaths.NEWS_DETAILS,
    [AppRoutes.NOT_FOUND]: AppPaths.NOT_FOUND,
    // Админам
    [AppRoutes.ADMIN]: AppPaths.ADMIN,
};

export const routeConfigDesktop: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageDesktop />,
    },
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <NewsPageDesktop />,
    },
    [AppRoutes.NEWS_DETAILS]: {
        path: RoutePath.news_details,
        element: <NewsDetailsPageDesktop />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    // Админам
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <NotFoundPage />,
        authOnly: true,
    },
};

export const routeConfigMobile: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageMobile />,
    },
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <NewsPageMobile />,
    },
    [AppRoutes.NEWS_DETAILS]: {
        path: RoutePath.news_details,
        element: <NewsDetailsPageMobile />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    // Админам
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <NotFoundPage />,
        authOnly: true,
    },
};
