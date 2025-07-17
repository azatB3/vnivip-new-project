import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './FooterContactsMobile.module.scss';

interface FooterContactsMobileProps {
    className?: string;
}

export const FooterContactsMobile = memo((props: FooterContactsMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterContactsMobile, {}, [className])}
        >
            contacts mobile
        </VStack>
    );
});
