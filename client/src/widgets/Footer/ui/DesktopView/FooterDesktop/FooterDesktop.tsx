import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FooterDesktop.module.scss';

interface FooterDesktopProps {
    className?: string;
}

export const FooterDesktop = memo((props: FooterDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <footer
            className={classNames(cls.FooterDesktop, {}, [className])}
        >
            footer desktop
        </footer>
    );
});
