import { lazy } from 'react';

export const AcademicCouncilPageDesktopAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AcademicCouncilPageDesktop')), 2000);
}));
