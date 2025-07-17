import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoaderMobile } from 'widgets/PageLoader';
import { AppRoutesProps, routeConfigMobile } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

const AppRouterMobile = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoaderMobile />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={<RequireAuth>{element}</RequireAuth>}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfigMobile).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouterMobile);
