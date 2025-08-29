import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { FC, memo } from 'react';
import cls from './AnchorMobile.module.scss';

export enum AnchorMobileTheme {
    WHITE = 'white',
    CLEAN = 'clean',
    BLUE = 'blue',
}

interface AnchorMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    theme?: AnchorMobileTheme;
    Svg?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const AnchorMobile: FC<AnchorMobileProps> = memo((props) => {
    const {
        className,
        children,
        href = '#',
        target = '_blank',
        theme = AnchorMobileTheme.CLEAN,
        Svg,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <a
            {...otherProps}
            className={classNames(cls.AnchorMobile, {}, [className, cls[theme]])}
            href={href}
            target={target}
        >
            {Svg ? <Svg /> : null}
            {children}
        </a>
    );
});
