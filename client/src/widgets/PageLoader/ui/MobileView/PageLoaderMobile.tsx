import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { HStack } from 'shared/ui/Stack';
import { useEffect } from 'react';
import mainLogo from 'shared/assets/icons/main-logo.svg';
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
            <div
                className={cls.pulseWrapper}
            >
                <Icon
                    Svg={mainLogo}
                    theme={IconTheme.CLEAN}
                    className={cls.icon}
                />
                <div
                    className={cls.pulse}
                />
                <div
                    className={cls.pulse2}
                />
            </div>
        </HStack>
    );
};
