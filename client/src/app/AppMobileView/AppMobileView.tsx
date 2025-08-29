import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouterMobile } from 'app/providers/router';
import { HeaderMobile } from 'widgets/Header';
import { FooterMobile } from 'widgets/Footer';
import { PageLoaderMobile } from 'widgets/PageLoader';

const AppMobileView = () => {
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
        * {
            -webkit-tap-highlight-color: transparent;
        }
        `;
        document.head.appendChild(styleSheet);
    }, []);

    return (
        <div className={classNames('app_mobile', {}, [])}>
            <HeaderMobile />
            <AppRouterMobile />
            <FooterMobile />
            <PageLoaderMobile />
        </div>
    );
};

export default AppMobileView;
