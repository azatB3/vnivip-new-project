import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './FooterNavigationDesktop.module.scss';

interface FooterNavigationDesktopProps {
    className?: string;
}

export const FooterNavigationDesktop = memo((props: FooterNavigationDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterNavigationDesktop, {}, [className])}
            maxH
            gap={40}
        >
            <Text
                theme={TextTheme.GREY3}
                size={TextSize.BODY_S_DESKTOP}
            >
                {`[ ${t('Навигация')} ]`}
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
                    {t('Контакты')}
                </AppLink>
                <AppLink
                    to="#"
                    theme={AppLinkTheme.GREY}
                    className={cls.link}
                >
                    {t('Партнеры')}
                </AppLink>
            </VStack>
        </VStack>
    );
});
