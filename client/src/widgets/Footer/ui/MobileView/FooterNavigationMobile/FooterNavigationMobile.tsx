import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './FooterNavigationMobile.module.scss';

interface FooterNavigationMobileProps {
    className?: string;
}

export const FooterNavigationMobile = memo((props: FooterNavigationMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterNavigationMobile, {}, [className])}
        >
            navigaton mobile
        </VStack>
    );
});
