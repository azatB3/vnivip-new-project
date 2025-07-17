import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FooterMobile.module.scss';

interface FooterMobileProps {
    className?: string;
}

export const FooterMobile = memo((props: FooterMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <footer
            className={classNames(cls.FooterMobile, {}, [className])}
        >
            footer mobile
        </footer>
    );
});
