import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import logoLightMobileIcon from 'shared/assets/icons/logo-light-mobile.svg';
import { HStack } from 'shared/ui/Stack';
import { useEffect } from 'react';
import cls from './PageLoaderMobile.module.scss';

interface PageLoaderMobileProps {
    className?: string;
}

export const PageLoaderMobile = ({ className }: PageLoaderMobileProps) => {
    useEffect(() => {
        document.body.classList.add('is-loading-body');

        return () => {
            document.body.classList.remove('is-loading-body');
        };
    }, []);

    return (
        <HStack
            className={classNames(cls.PageLoaderMobile, {}, [className])}
            justify="center"
            align="center"
        >
            Loading...
        </HStack>
    );
};
