import React, { MutableRefObject, UIEvent, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouterDesktop } from 'app/providers/router';
import { HeaderDesktop } from 'widgets/Header';
import { FooterDesktop } from 'widgets/Footer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { APP_DESKTOP_ID } from 'shared/const/components';
import { PageLoaderDesktop } from 'widgets/PageLoader';

const AppDesktopView = () => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getUIScrollByPath(state, pathname),
    );

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e?.currentTarget?.scrollTop,
            path: pathname,
        }));
    }, 100);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [pathname]);

    return (
        <div
            className={classNames('app_desktop', {}, [])}
            ref={wrapperRef}
            onScroll={onScroll}
            id={APP_DESKTOP_ID}
        >
            <HeaderDesktop
                isFixed={scrollPosition > 400}
            />
            <AppRouterDesktop />
            <FooterDesktop />
            <PageLoaderDesktop />
        </div>
    );
};

export default AppDesktopView;
