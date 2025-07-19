import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { MainPageBanner } from '../MainPageBanner/MainPageBanner';
import cls from './MainPageDesktop.module.scss';

interface MainPageDesktopProps {
    className?: string;
}

const MainPageDesktop = (props: MainPageDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames(cls.MainPageDesktop, {}, [className])}>
            <MainPageBanner />
        </Page>
    );
};

export default MainPageDesktop;
