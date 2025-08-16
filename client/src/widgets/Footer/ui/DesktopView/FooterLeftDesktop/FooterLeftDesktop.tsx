import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import mainLogoLargeIcon from 'shared/assets/icons/main-logo-large.svg';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import cls from './FooterLeftDesktop.module.scss';

interface FooterLeftDesktopProps {
    className?: string;
}

export const FooterLeftDesktop = memo((props: FooterLeftDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterLeftDesktop, {}, [className])}
            justify="between"
            align="center"
            maxH
        >
            <Icon
                Svg={mainLogoLargeIcon}
                theme={IconTheme.CLEAN}
            />
            <Text
                theme={TextTheme.GREY}
                size={TextSize.BODY_S_DESKTOP}
            >
                {t('Права защищены')}
            </Text>
        </VStack>
    );
});
