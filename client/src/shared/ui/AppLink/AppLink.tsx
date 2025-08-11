import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import React, { FC, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    WHITE = 'white',
    CLEAN = 'clean',
    GREY = 'grey',
    DARK2 = 'dark2',
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    Svg?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children = null,
        Svg,
        theme = AppLinkTheme.CLEAN,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {Svg ? <Svg /> : null}
            {children}
        </Link>
    );
});
