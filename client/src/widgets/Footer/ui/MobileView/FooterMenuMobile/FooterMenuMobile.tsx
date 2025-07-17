import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './FooterMenuMobile.module.scss';

interface FooterMenuMobileProps {
    className?: string;
}

export const FooterMenuMobile = memo((props: FooterMenuMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterMenuMobile, {}, [className])}
        >
            menu
        </VStack>
    );
});
