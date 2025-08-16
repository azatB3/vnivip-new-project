import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { Cover, CoverSize } from 'shared/ui/Cover/DesktopView/Cover';
import cover3Img from 'shared/assets/images/cover3.jpg';
import partner1Icon from 'shared/assets/icons/partner1-100-100.svg';
import partner2Icon from 'shared/assets/icons/partner2-100-100.svg';
import partner3Icon from 'shared/assets/icons/partner3-100-100.svg';
import partner4Icon from 'shared/assets/icons/partner4-100-100.svg';
import partner5Icon from 'shared/assets/icons/partner5-230-100.svg';
import {
    PartnersPageTitleDesktop,
} from '../PartnersPageTitleDesktop/PartnersPageTitleDesktop';
import cls from './PartnersPageDesktop.module.scss';
import {
    PartnersPageCardDesktop,
} from '../PartnersPageCardDesktop/PartnersPageCardDesktop';

interface PartnersPageDesktopProps {
    className?: string;
}

const PartnersPageDesktop = memo((props: PartnersPageDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('partnersPage');

    return (
        <Page className={classNames(cls.PartnersPageDesktop, {}, [className])}>
            <VStack
                maxW
                maxH
                gap={50}
                paddingB={100}
            >
                <Cover
                    size={CoverSize.SMALL}
                    src={cover3Img}
                />
                <VStack
                    paddingL={50}
                    paddingR={50}
                    maxW
                    gap={100}
                >
                    <PartnersPageTitleDesktop />
                    <VStack
                        gap={50}
                        maxW
                        align="center"
                    >
                        <PartnersPageCardDesktop
                            Svg={partner1Icon}
                            name={t('Российский научный фонд')}
                            description={t('описание сотрудничества с российским научным фондом')}
                            link="https://rscf.ru/"
                        />
                        <PartnersPageCardDesktop
                            Svg={partner2Icon}
                            name={t('Российский птицеводческий союз')}
                            description={t('описание сотрудничества с российским птицеводческим союзом')}
                            link="http://rps.ru/"
                        />
                        <PartnersPageCardDesktop
                            Svg={partner3Icon}
                            name={t('Российский фонд фундаментальных исследований')}
                            description={t('описание сотрудничества с российским фондом фундаментальных исследований')}
                            link="https://www.rfbr.ru/"
                        />
                        <PartnersPageCardDesktop
                            Svg={partner4Icon}
                            name={t('Министерство науки и высшего образования Российской Федерации')}
                            description={t('описание сотрудничества с министерством науки и высшего образования Российской Федерации')}
                            link="https://minobrnauki.gov.ru/"
                        />
                        <PartnersPageCardDesktop
                            Svg={partner5Icon}
                            name={t('Российская академия наук')}
                            description={t('описание сотрудничества с российской академией наук')}
                            link="https://www.ras.ru/"
                        />
                    </VStack>
                </VStack>
            </VStack>
        </Page>
    );
});

export default PartnersPageDesktop;
