import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import goalIcon from 'shared/assets/icons/goal-72-72.svg';
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
            paddingB={130}
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
                className={cls.paragraphsWrapper}
            >
                <VStack
                    maxW
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
                    <VStack
                        maxW
                        gap={32}
                    >
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_DESKTOP}
                            align={TextAlign.JUSTIFY}
                            textIndent
                        >
                            {t('история параграф 1')}
                        </Text>
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_DESKTOP}
                            align={TextAlign.JUSTIFY}
                        >
                            {t('история параграф 2')}
                        </Text>
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_DESKTOP}
                            align={TextAlign.JUSTIFY}
                        >
                            {t('история параграф 3')}
                        </Text>
                        <Text
                            theme={TextTheme.GREY3}
                            size={TextSize.BODY_L_LIGHT_DESKTOP}
                            align={TextAlign.RIGHT}
                        >
                            {t('история параграф 4')}
                        </Text>
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_DESKTOP}
                            align={TextAlign.JUSTIFY}
                        >
                            {t('история параграф 5')}
                        </Text>
                    </VStack>
                </VStack>
                <HStack
                    align="center"
                    gap={80}
                    className={cls.quoteWrapper}
                >
                    <Card
                        className={cls.quote}
                        borderR={50}
                    >
                        <Card
                            padding={50}
                            borderR={10}
                            theme={CardTheme.BLUE_LIGHT}
                        >
                            <Text
                                theme={TextTheme.DARK2}
                                size={TextSize.H4_DESKTOP}
                                align={TextAlign.JUSTIFY}
                            >
                                {t('история цитата')}
                            </Text>
                        </Card>
                    </Card>
                    <Icon
                        theme={IconTheme.CLEAN}
                        Svg={goalIcon}
                    />
                </HStack>
                <VStack
                    maxW
                    gap={32}
                >
                    <Text
                        theme={TextTheme.DARK}
                        size={TextSize.BODY_L_LIGHT_DESKTOP}
                        align={TextAlign.JUSTIFY}
                        textIndent
                    >
                        {t('история параграф 6')}
                    </Text>
                    <Text
                        theme={TextTheme.DARK}
                        size={TextSize.BODY_L_LIGHT_DESKTOP}
                        align={TextAlign.JUSTIFY}
                    >
                        {t('история параграф 7')}
                    </Text>
                    <Text
                        theme={TextTheme.DARK}
                        size={TextSize.BODY_L_LIGHT_DESKTOP}
                        align={TextAlign.JUSTIFY}
                    >
                        {t('история параграф 8')}
                    </Text>
                    <Text
                        theme={TextTheme.GREY3}
                        size={TextSize.BODY_L_LIGHT_DESKTOP}
                        align={TextAlign.RIGHT}
                    >
                        {t('история параграф 9')}
                    </Text>
                    <Text
                        theme={TextTheme.DARK}
                        size={TextSize.BODY_L_LIGHT_DESKTOP}
                        align={TextAlign.JUSTIFY}
                    >
                        {t('история параграф 10')}
                    </Text>
                </VStack>
            </VStack>
        </VStack>
    );
});
