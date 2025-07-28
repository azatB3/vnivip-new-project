import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { FC, memo } from 'react';
import cls from './Link.module.scss';

export enum LinkTheme {
    WHITE = 'white',
    CLEAN = 'clean',
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    theme?: LinkTheme;
}

export const Link: FC<LinkProps> = memo((props) => {
    const {
        className,
        children,
        href = '#',
        target = '_blank',
        theme = LinkTheme.CLEAN,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <a
            {...otherProps}
            className={classNames(cls.Link, {}, [className, cls[theme]])}
            href={href}
            target={target}
        >
            {children}
        </a>
    );
});
