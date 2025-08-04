import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import telegramIcon from 'shared/assets/icons/telegram-32-32-white.svg';
import vkIcon from 'shared/assets/icons/vk-32-32-white.svg';
import youtubeIcon from 'shared/assets/icons/youtube-32-32-white.svg';
import { Anchor, AnchorTheme } from 'shared/ui/Anchor/Anchor';
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
            maxH
            gap={40}
        >
            <Text
                theme={TextTheme.GREY3}
                size={TextSize.BODY_S_DESKTOP}
            >
                {`[ ${t('Контакты')} ]`}
            </Text>
            <VStack
                gap={16}
                maxW
            >
                <VStack
                    maxW
                >
                    <Text
                        theme={TextTheme.GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Номер телефона')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.BODY_S_DESKTOP}
                        className={cls.contact}
                    >
                        +8 (812) 372-54-84
                    </Text>
                </VStack>
                <VStack
                    maxW
                >
                    <Text
                        theme={TextTheme.GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Общая почта')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.BODY_S_DESKTOP}
                        className={cls.contact}
                    >
                        vnivip@yandex.ru
                    </Text>
                </VStack>
                <VStack
                    maxW
                >
                    <Text
                        theme={TextTheme.GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Адрес')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.BODY_S_DESKTOP}
                        className={cls.contact}
                    >
                        г.Санкт-Петербург, Ломоносов, ул. Черникова 48а
                    </Text>
                </VStack>
                <VStack
                    maxW
                >
                    <Text
                        theme={TextTheme.GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Соцсети')}:`}
                    </Text>
                    <HStack
                        align="center"
                        gap={10}
                    >
                        <Anchor
                            Svg={telegramIcon}
                            theme={AnchorTheme.WHITE}
                            href="#"
                        />
                        <Anchor
                            Svg={vkIcon}
                            theme={AnchorTheme.WHITE}
                            href="#"
                        />
                        <Anchor
                            Svg={youtubeIcon}
                            theme={AnchorTheme.WHITE}
                            href="#"
                        />
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
});
