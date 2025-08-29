import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPageDesktop, MainPageMobile } from 'pages/MainPage';
import { NewsPageDesktop, NewsPageMobile } from 'pages/NewsPage';
import { NewsDetailsPageDesktop, NewsDetailsPageMobile } from 'pages/NewsDetailsPage';
import { PartnersPageDesktop, PartnersPageMobile } from 'pages/PartnersPage';
import { ContactsPageDesktop, ContactsPageMobile } from 'pages/ContactsPage';
import { AdministrationPageDesktop, AdministrationPageMobile } from 'pages/AdministrationPage';
import { AcademicCouncilPageDesktop, AcademicCouncilPageMobile } from 'pages/AcademicCouncilPage';
import { CouncilYoungScientistsPageDesktop, CouncilYoungScientistsPageMobile } from 'pages/CouncilYoungScientistsPage';
import { ScienceDepartmentsPageDesktop, ScienceDepartmentsPageMobile } from 'pages/ScienceDepartmentsPage';
import { AboutInstitutePageDesktop, AboutInstitutePageMobile } from 'pages/AboutInstitutePage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    NEWS = 'news',
    NEWS_DETAILS = 'news_details',
    PARTNERS = 'partners',
    CONTACTS = 'contacts',
    ADMINISTRATION = 'administration',
    ACADEMIC_COUNCIL = 'academic_council',
    COUNCIL_YOUNG_SCIENTISTS = 'council_young_scientists',
    SCIENCE_DEPARTMENTS = 'science_departments',
    ABOUT_INSTITUTE = 'about_institute',
    NOT_FOUND = 'not_found',
    // Админам
    ADMIN = 'admin',
}

export enum AppPaths {
    MAIN = '/',
    NEWS = '/news',
    NEWS_DETAILS = '/news/:id',
    PARTNERS = '/partners',
    CONTACTS = '/contacts',
    ADMINISTRATION = '/administration',
    ACADEMIC_COUNCIL = '/academic_council',
    COUNCIL_YOUNG_SCIENTISTS = '/council_young_scientists',
    SCIENCE_DEPARTMENTS = '/science_departments',
    ABOUT_INSTITUTE = '/about',
    NOT_FOUND = '*',
    // Админам
    ADMIN = '/admin',
}

export const RoutePath: Record<AppRoutes, AppPaths> = {
    [AppRoutes.MAIN]: AppPaths.MAIN,
    [AppRoutes.NEWS]: AppPaths.NEWS,
    [AppRoutes.NEWS_DETAILS]: AppPaths.NEWS_DETAILS,
    [AppRoutes.PARTNERS]: AppPaths.PARTNERS,
    [AppRoutes.CONTACTS]: AppPaths.CONTACTS,
    [AppRoutes.ADMINISTRATION]: AppPaths.ADMINISTRATION,
    [AppRoutes.ACADEMIC_COUNCIL]: AppPaths.ACADEMIC_COUNCIL,
    [AppRoutes.COUNCIL_YOUNG_SCIENTISTS]: AppPaths.COUNCIL_YOUNG_SCIENTISTS,
    [AppRoutes.SCIENCE_DEPARTMENTS]: AppPaths.SCIENCE_DEPARTMENTS,
    [AppRoutes.ABOUT_INSTITUTE]: AppPaths.ABOUT_INSTITUTE,
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
    [AppRoutes.PARTNERS]: {
        path: RoutePath.partners,
        element: <PartnersPageDesktop />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPageDesktop />,
    },
    [AppRoutes.ADMINISTRATION]: {
        path: RoutePath.administration,
        element: <AdministrationPageDesktop />,
    },
    [AppRoutes.ACADEMIC_COUNCIL]: {
        path: RoutePath.academic_council,
        element: <AcademicCouncilPageDesktop />,
    },
    [AppRoutes.COUNCIL_YOUNG_SCIENTISTS]: {
        path: RoutePath.council_young_scientists,
        element: <CouncilYoungScientistsPageDesktop />,
    },
    [AppRoutes.SCIENCE_DEPARTMENTS]: {
        path: RoutePath.science_departments,
        element: <ScienceDepartmentsPageDesktop />,
    },
    [AppRoutes.ABOUT_INSTITUTE]: {
        path: RoutePath.about_institute,
        element: <AboutInstitutePageDesktop />,
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
    [AppRoutes.PARTNERS]: {
        path: RoutePath.partners,
        element: <PartnersPageMobile />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPageMobile />,
    },
    [AppRoutes.ADMINISTRATION]: {
        path: RoutePath.administration,
        element: <AdministrationPageMobile />,
    },
    [AppRoutes.ACADEMIC_COUNCIL]: {
        path: RoutePath.academic_council,
        element: <AcademicCouncilPageMobile />,
    },
    [AppRoutes.COUNCIL_YOUNG_SCIENTISTS]: {
        path: RoutePath.council_young_scientists,
        element: <CouncilYoungScientistsPageMobile />,
    },
    [AppRoutes.SCIENCE_DEPARTMENTS]: {
        path: RoutePath.science_departments,
        element: <ScienceDepartmentsPageMobile />,
    },
    [AppRoutes.ABOUT_INSTITUTE]: {
        path: RoutePath.about_institute,
        element: <AboutInstitutePageMobile />,
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
