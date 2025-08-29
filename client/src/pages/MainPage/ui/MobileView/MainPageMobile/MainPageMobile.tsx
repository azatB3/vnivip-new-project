import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './MainPageMobile.module.scss';
import { MainPageBannerMobile } from '../MainPageBannerMobile/MainPageBannerMobile';

interface MainPageMobileProps {
    className?: string;
}

const MainPageMobile = (props: MainPageMobileProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames(cls.MainPageMobile, {}, [className])}>
            <VStack
                maxW
                maxH
            >
                <MainPageBannerMobile />
            </VStack>
        </Page>
    );
};

export default MainPageMobile;
