import { memo } from 'react';
import { Cover, CoverSize } from 'shared/ui/Cover/DesktopView/Cover';
import cover2Img from 'shared/assets/images/cover2.jpg';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import arrowDownIcon from 'shared/assets/icons/arrow-down-24-24-white.svg';
import telegramIcon from 'shared/assets/icons/telegram-32-32-white.svg';
import vkIcon from 'shared/assets/icons/vk-32-32-white.svg';
import youtubeIcon from 'shared/assets/icons/youtube-32-32-white.svg';
import { useTranslation } from 'react-i18next';
import cls from './MainPageBanner.module.scss';

export const MainPageBanner = memo(() => {
    const { t } = useTranslation('mainPage');

    return (
        <Cover
            size={CoverSize.LARGE}
            src={cover2Img}
        >
            <VStack
                gap={100}
            >
                <VStack
                    paddingL={130}
                >
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.H1_DESKTOP}
                        className={cls.instituteName}
                    >
                        {t('Всероссийский научно-исследовательский ветеринарный институт птицеводства')}
                    </Text>
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.H2_LIGHT_DESKTOP}
                    >
                        {t('филиал ФНЦ ВНИТИП')}
                    </Text>
                </VStack>
                <HStack
                    maxW
                    justify="between"
                >
                    <AppLink
                        to="#"
                        theme={AppLinkTheme.WHITE}
                        Svg={arrowDownIcon}
                    >
                        {t('К новостям')}
                    </AppLink>
                    <HStack
                        gap={16}
                    >
                        <AppLink
                            to="#"
                            theme={AppLinkTheme.WHITE}
                            Svg={telegramIcon}
                        />
                        <AppLink
                            to="#"
                            theme={AppLinkTheme.WHITE}
                            Svg={vkIcon}
                        />
                        <AppLink
                            className={cls.youtubeIcon}
                            to="#"
                            theme={AppLinkTheme.WHITE}
                            Svg={youtubeIcon}
                        />
                    </HStack>
                </HStack>
            </VStack>
        </Cover>
    );
});
