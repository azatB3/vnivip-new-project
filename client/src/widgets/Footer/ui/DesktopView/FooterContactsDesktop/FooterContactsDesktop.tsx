import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './FooterContactsDesktop.module.scss';

interface FooterContactsDesktopProps {
    className?: string;
}

export const FooterContactsDesktop = memo((props: FooterContactsDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterContactsDesktop, {}, [className])}
        >
            contacts
        </VStack>
    );
});
