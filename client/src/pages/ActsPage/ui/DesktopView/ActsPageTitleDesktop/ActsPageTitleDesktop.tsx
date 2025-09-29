import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ActsPageTitleDesktop.module.scss';

interface ActsPageTitleDesktopProps {
    className?: string;
}

export const ActsPageTitleDesktop = memo((props: ActsPageTitleDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('actsPage');

    return (
        <VStack
            maxW
            className={classNames(cls.ActsPageTitleDesktop, {}, [className])}
        >
            <Text
                theme={TextTheme.GREY}
                size={TextSize.BODY_S_DESKTOP}
            >
                {`[ ${t('Нормативно-правовые акты')} ]`}
            </Text>
            <Text
                theme={TextTheme.DARK2}
                size={TextSize.H2_DESKTOP}
                className={cls.mainTitle}
                align={TextAlign.CENTER}
            >
                {t('Нормативно-правовые акты')}
            </Text>
        </VStack>
    );
});
