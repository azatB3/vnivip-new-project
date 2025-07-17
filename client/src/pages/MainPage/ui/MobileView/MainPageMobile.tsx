import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import cls from './MainPageMobile.module.scss';

interface MainPageMobileProps {
    className?: string;
}

const MainPageMobile = (props: MainPageMobileProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames(cls.MainPageMobile, {}, [className])}>
            mobile
        </Page>
    );
};

export default MainPageMobile;
