import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './FooterGovMobile.module.scss';

interface FooterGovMobileProps {
    className?: string;
}

export const FooterGovMobile = memo((props: FooterGovMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterGovMobile, {}, [className])}
        >
            gov mobile
        </VStack>
    );
});
