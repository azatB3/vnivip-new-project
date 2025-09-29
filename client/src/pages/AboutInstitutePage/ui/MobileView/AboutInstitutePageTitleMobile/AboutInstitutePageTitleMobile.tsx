import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './AboutInstitutePageTitleMobile.module.scss';

interface AboutInstitutePageTitleMobileProps {
    className?: string;
}

export const AboutInstitutePageTitleMobile = memo((props: AboutInstitutePageTitleMobileProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('aboutInstitutePage');

    return (
        <VStack
            maxW
            className={classNames(cls.AboutInstitutePageTitleMobile, {}, [className])}
            gap={40}
        >
            <Text
                theme={TextTheme.DARK2}
                size={TextSize.H3_MOBILE}
                className={cls.mainTitle}
                align={TextAlign.RIGHT}
            >
                {t('Всероссийский научно-исследовательский ветеринарный институт птицеводства').toUpperCase()}
            </Text>
            <VStack
                maxW
                gap={20}
            >
                <Text
                    theme={TextTheme.GREY}
                    size={TextSize.BODY_S_MOBILE}
                >
                    {`[ ${t('Об институте')} ]`}
                </Text>
                <Text
                    theme={TextTheme.DARK2}
                    size={TextSize.H2_MOBILE}
                    className={cls.mainTitle}
                    align={TextAlign.CENTER}
                >
                    {t('История')}
                </Text>
            </VStack>
        </VStack>
    );
});
