import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './VacanciesPageTitleDesktop.module.scss';

interface VacanciesPageTitleDesktopProps {
    className?: string;
}

export const VacanciesPageTitleDesktop = memo((props: VacanciesPageTitleDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('vacanciesPage');

    return (
        <VStack
            maxW
            className={classNames(cls.VacanciesPageTitleDesktop, {}, [className])}
        >
            <Text
                theme={TextTheme.GREY}
                size={TextSize.BODY_S_DESKTOP}
            >
                {`[ ${t('Вакансии')} ]`}
            </Text>
            <Text
                theme={TextTheme.DARK2}
                size={TextSize.H2_DESKTOP}
                className={cls.mainTitle}
                align={TextAlign.CENTER}
            >
                {t('Вакансии')}
            </Text>
        </VStack>
    );
});
