import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './PartnersPageTitleDesktop.module.scss';

interface PartnersPageTitleDesktopProps {
    className?: string;
}

export const PartnersPageTitleDesktop = memo((props: PartnersPageTitleDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('partnersPage');

    return (
        <VStack
            maxW
            className={classNames(cls.PartnersPageTitleDesktop, {}, [className])}
        >
            <Text
                theme={TextTheme.GREY}
                size={TextSize.BODY_S_DESKTOP}
            >
                {`[ ${t('Партнеры')} ]`}
            </Text>
            <Text
                theme={TextTheme.DARK2}
                size={TextSize.H2_DESKTOP}
                className={cls.mainTitle}
                align={TextAlign.CENTER}
            >
                {t('Сотрудничество ВНИВИП')}
            </Text>
        </VStack>
    );
});
