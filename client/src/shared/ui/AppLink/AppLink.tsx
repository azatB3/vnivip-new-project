import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    WHITE = 'white',
    CLEAN = 'clean',
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.CLEAN,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
