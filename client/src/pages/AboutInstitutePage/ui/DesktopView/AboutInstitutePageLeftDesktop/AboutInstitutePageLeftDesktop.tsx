import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './AboutInstitutePageLeftDesktop.module.scss';

interface AboutInstitutePageLeftDesktopProps {
    className?: string;
}

export const AboutInstitutePageLeftDesktop = memo((props: AboutInstitutePageLeftDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('aboutInstitutePage');

    return (
        <VStack
            className={classNames(cls.AboutInstitutePageLeftDesktop, {}, [className])}
            padding={30}
            gap={100}
        >
            <Text
                theme={TextTheme.DARK2}
                size={TextSize.H3_DESKTOP}
                align={TextAlign.RIGHT}
                className={cls.instituteName}
            >
                {t('Всероссийский научно-исследовательский ветеринарный институт птицеводства').toUpperCase()}
            </Text>
            <VStack
                maxW
                paddingL={30}
                paddingR={30}
                gap={50}
            >
                <Text
                    theme={TextTheme.GREY}
                    size={TextSize.BODY_S_DESKTOP}
                >
                    {`[ ${t('Об институте')} ]`}
                </Text>
                <Text
                    theme={TextTheme.DARK2}
                    size={TextSize.H2_LIGHT_DESKTOP}
                    align={TextAlign.CENTER}
                    className={cls.historyText}
                >
                    {t('История')}
                </Text>
            </VStack>
        </VStack>
    );
});
