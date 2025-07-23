import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { MainPageGallery } from 'pages/MainPage/ui/DesktopView/MainPageGallery/MainPageGallery';
import { MainPageNews } from 'pages/MainPage/ui/DesktopView/MainPageNews/MainPageNews';
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
                    gap={100}
                >
                    <MainPageAboutUs />
                    <MainPageGallery />
                    <MainPageNews />
                </VStack>
            </VStack>
        </Page>
    );
};

export default MainPageDesktop;
