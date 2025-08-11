import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { MainPageGalleryDesktop } from '../MainPageGalleryDesktop/MainPageGalleryDesktop';
import { MainPageNewsDesktop } from '../MainPageNewsDesktop/MainPageNewsDesktop';
import { MainPageBannerDesktop } from '../MainPageBannerDesktop/MainPageBannerDesktop';
import { MainPageAboutUsDesktop } from '../MainPageAboutUsDesktop/MainPageAboutUsDesktop';
import { MainPagePartnersDesktop } from '../MainPagePartnersDesktop/MainPagePartnersDesktop';
import cls from './MainPageDesktop.module.scss';
import { MainPageNewsReducer } from '../../../model/slices/MainPageNewsSlice';

interface MainPageDesktopProps {
    className?: string;
}

const reducers: ReducersList = {
    mainPageNews: MainPageNewsReducer,
};

const MainPageDesktop = (props: MainPageDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page className={classNames(cls.MainPageDesktop, {}, [className])}>
                <VStack
                    maxW
                    maxH
                    gap={50}
                >
                    <MainPageBannerDesktop />
                    <VStack
                        paddingL={50}
                        paddingR={50}
                        maxW
                        gap={100}
                    >
                        <MainPageAboutUsDesktop />
                        <MainPageNewsDesktop />
                        <MainPageGalleryDesktop />
                    </VStack>
                    <MainPagePartnersDesktop />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default MainPageDesktop;
