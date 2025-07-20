import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { MainPageGallery } from 'pages/MainPage/ui/DesktopView/MainPageGallery/MainPageGallery';
import { MainPageBanner } from '../MainPageBanner/MainPageBanner';
import cls from './MainPageDesktop.module.scss';
import { MainPageAboutUs } from '../MainPageAboutUs/MainPageAboutUs';

interface MainPageDesktopProps {
    className?: string;
}

const MainPageDesktop = (props: MainPageDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames(cls.MainPageDesktop, {}, [className])}>
            <VStack
                maxW
                maxH
                gap={50}
            >
                <MainPageBanner />
                <VStack
                    paddingL={50}
                    paddingR={50}
                    maxW
                    gap={70}
                >
                    <MainPageAboutUs />
                    <MainPageGallery />
                </VStack>
            </VStack>
        </Page>
    );
};

export default MainPageDesktop;
