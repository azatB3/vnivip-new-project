import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import mainLogo from 'shared/assets/icons/main-logo.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './PageLoaderDesktop.module.scss';

interface PageLoaderDesktopProps {
    className?: string;
}

export const PageLoaderDesktop = ({ className }: PageLoaderDesktopProps) => {
    return (
        <Portal>
            <HStack
                className={classNames(cls.PageLoaderDesktop, {}, [className])}
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
        </Portal>
    );
};
