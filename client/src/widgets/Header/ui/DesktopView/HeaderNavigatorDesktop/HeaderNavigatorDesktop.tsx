import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './HeaderNavigatorDesktop.module.scss';

interface HeaderNavigatorDesktopProps {
    className?: string;
}

export const HeaderNavigatorDesktop = memo((props: HeaderNavigatorDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.HeaderNavigatorDesktop, {}, [className])}
        >
            header navigator
        </HStack>
    );
});
