import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './FooterDesktop.module.scss';

interface FooterDesktopProps {
    className?: string;
}

export const FooterDesktop = memo((props: FooterDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.FooterDesktop, {}, [className])}
            ContentTag="footer"
        >
            footer desktop
        </HStack>
    );
});
