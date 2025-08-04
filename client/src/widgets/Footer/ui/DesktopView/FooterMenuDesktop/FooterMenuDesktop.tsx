import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
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
            maxH
            gap={40}
        >
            <Text
                theme={TextTheme.GREY3}
                size={TextSize.BODY_S_DESKTOP}
            >
                {`[ ${t('Меню')} ]`}
            </Text>
            <VStack
                gap={10}
                maxW
            >
                <AppLink
                    to="#"
                    theme={AppLinkTheme.GREY}
                    className={cls.link}
                >
                    {t('Об институте')}
                </AppLink>
                <AppLink
                    to="#"
                    theme={AppLinkTheme.GREY}
                    className={cls.link}
                >
                    {t('Научная и образовательная деятельность')}
                </AppLink>
                <AppLink
                    to="#"
                    theme={AppLinkTheme.GREY}
                    className={cls.link}
                >
                    {t('Услуги')}
                </AppLink>
            </VStack>
        </VStack>
    );
});
