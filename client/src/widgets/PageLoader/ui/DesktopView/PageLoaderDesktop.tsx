import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { useEffect } from 'react';
import cls from './PageLoaderDesktop.module.scss';

interface PageLoaderDesktopProps {
    className?: string;
}

export const PageLoaderDesktop = ({ className }: PageLoaderDesktopProps) => {
    useEffect(() => {
        document.body.classList.add('is-loading-body');

        return () => {
            document.body.classList.remove('is-loading-body');
        };
    }, []);

    return (
        <HStack
            className={classNames(cls.PageLoaderDesktop, {}, [className])}
            justify="center"
            align="center"
        >
            Loading...
        </HStack>
    );
};
