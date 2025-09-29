import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { CoverMobile, CoverMobileSize } from 'shared/ui/Cover/MobileView/CoverMobile';
import history1Img from 'shared/assets/images/history1.webp';
import history2Img from 'shared/assets/images/history2.webp';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import buildImage from 'shared/assets/images/build1.jpg';
import scientistImage from 'shared/assets/images/scientist1.jpg';
import meetingImage from 'shared/assets/images/meeting1.jpg';
import scienceImage from 'shared/assets/images/science1.jpg';
import {
    AboutInstitutePageGoalMobile,
} from 'pages/AboutInstitutePage/ui/MobileView/AboutInstitutePageGoalMobile/AboutInstitutePageGoalMobile';
import {
    AboutInstitutePageTitleMobile,
} from '../AboutInstitutePageTitleMobile/AboutInstitutePageTitleMobile';
import {
    AboutInstitutePageDirectorMobile,
} from '../AboutInstitutePageDirectorMobile/AboutInstitutePageDirectorMobile';
import cls from './AboutInstitutePageMobile.module.scss';
import {
    AboutInstitutePageImageMobile,
} from '../AboutInstitutePageImageMobile/AboutInstitutePageImageMobile';

interface AboutInstitutePageMobileProps {
    className?: string;
}

const AboutInstitutePageMobile = memo((props: AboutInstitutePageMobileProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('aboutInstitutePage');

    return (
        <Page className={classNames(cls.AboutInstitutePageMobile, {}, [className])}>
            <VStack
                maxW
                maxH
                gap={20}
                paddingB={70}
            >
                <CoverMobile
                    size={CoverMobileSize.SMALL}
                    images={[
                        history1Img,
                        history2Img,
                    ]}
                />
                <VStack
                    maxW
                    gap={30}
                >
                    <VStack
                        maxW
                        paddingL={10}
                        paddingR={10}
                        gap={50}
                    >
                        <AboutInstitutePageTitleMobile />
                        <VStack
                            maxW
                            gap={30}
                        >
                            <Text
                                theme={TextTheme.DARK}
                                size={TextSize.BODY_L_LIGHT_MOBILE}
                                align={TextAlign.JUSTIFY}
                                textIndent
                            >
                                {t('история параграф 1')}
                            </Text>
                            <Text
                                theme={TextTheme.DARK}
                                size={TextSize.BODY_L_LIGHT_MOBILE}
                                align={TextAlign.JUSTIFY}
                                textIndent
                            >
                                {t('история параграф 2')}
                            </Text>
                            <AboutInstitutePageImageMobile
                                src={buildImage}
                                text={t('Здание ВНИВИП')}
                            />
                            <Text
                                theme={TextTheme.DARK}
                                size={TextSize.BODY_L_LIGHT_MOBILE}
                                align={TextAlign.JUSTIFY}
                                textIndent
                            >
                                {t('история параграф 3')}
                            </Text>
                            <Text
                                theme={TextTheme.GREY3}
                                size={TextSize.BODY_L_LIGHT_MOBILE}
                                align={TextAlign.RIGHT}
                                textIndent
                            >
                                {t('история параграф 4')}
                            </Text>
                            <AboutInstitutePageImageMobile
                                src={scientistImage}
                                text={t('Научный процесс')}
                            />
                        </VStack>
                    </VStack>
                    <AboutInstitutePageDirectorMobile />
                    <VStack
                        maxW
                        paddingL={10}
                        paddingR={10}
                        gap={30}
                    >
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_MOBILE}
                            align={TextAlign.JUSTIFY}
                            textIndent
                        >
                            {t('история параграф 5')}
                        </Text>
                        <AboutInstitutePageGoalMobile />
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_MOBILE}
                            align={TextAlign.JUSTIFY}
                            textIndent
                        >
                            {t('история параграф 6')}
                        </Text>
                        <AboutInstitutePageImageMobile
                            src={meetingImage}
                            text={t('Сотрудничество')}
                        />
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_MOBILE}
                            align={TextAlign.JUSTIFY}
                            textIndent
                        >
                            {t('история параграф 7')}
                        </Text>
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_MOBILE}
                            align={TextAlign.JUSTIFY}
                            textIndent
                        >
                            {t('история параграф 8')}
                        </Text>
                        <Text
                            theme={TextTheme.GREY3}
                            size={TextSize.BODY_L_LIGHT_MOBILE}
                            align={TextAlign.RIGHT}
                            textIndent
                        >
                            {t('история параграф 9')}
                        </Text>
                        <AboutInstitutePageImageMobile
                            src={scienceImage}
                            text={t('Исследования')}
                        />
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.BODY_L_LIGHT_MOBILE}
                            align={TextAlign.JUSTIFY}
                            textIndent
                        >
                            {t('история параграф 10')}
                        </Text>
                    </VStack>
                </VStack>
            </VStack>
        </Page>
    );
});

export default AboutInstitutePageMobile;
