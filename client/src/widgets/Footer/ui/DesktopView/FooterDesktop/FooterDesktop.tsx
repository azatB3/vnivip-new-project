import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { FooterMenuDesktop } from 'widgets/Footer/ui/DesktopView/FooterMenuDesktop/FooterMenuDesktop';
import { FooterContactsDesktop } from 'widgets/Footer/ui/DesktopView/FooterContactsDesktop/FooterContactsDesktop';
import cls from './FooterDesktop.module.scss';
import { FooterLeftDesktop } from '../FooterLeftDesktop/FooterLeftDesktop';
import { FooterNavigationDesktop } from '../FooterNavigationDesktop/FooterNavigationDesktop';

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
            maxW
        >
            <FooterLeftDesktop />
            <HStack
                className={cls.rightBlocks}
                maxH
            >
                <FooterNavigationDesktop />
                <FooterMenuDesktop />
                <FooterContactsDesktop />
            </HStack>
        </HStack>
    );
});
