import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { useNavigate } from 'react-router-dom';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Page
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            <button
                onClick={() => navigate('/')}
                type="button"
            >
                {t('Вернуться на главную')}
            </button>
        </Page>
    );
};
