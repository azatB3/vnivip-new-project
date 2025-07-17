import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './HeaderDesktop.module.scss';

interface HeaderDesktopProps {
    className?: string;
}

export const HEADER_ID = 'HEADER_ID';

export const HeaderDesktop = memo((props: HeaderDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <header
            className={classNames(cls.HeaderDesktop, {}, [className])}
            id={HEADER_ID}
        >
            header
        </header>
    );
});
