import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './FooterMenuDesktop.module.scss';

interface FooterMenuDesktopProps {
    className?: string;
}

export const FooterMenuDesktop = memo((props: FooterMenuDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterMenuDesktop, {}, [className])}
            gap="40"
        >
            menu
        </VStack>
    );
});
