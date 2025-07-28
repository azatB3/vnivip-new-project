import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { FC, memo } from 'react';
import cls from './Anchor.module.scss';

export enum AnchorTheme {
    WHITE = 'white',
    CLEAN = 'clean',
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    theme?: AnchorTheme;
    Svg?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Anchor: FC<AnchorProps> = memo((props) => {
    const {
        className,
        children,
        href = '#',
        target = '_blank',
        theme = AnchorTheme.CLEAN,
        Svg,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <a
            {...otherProps}
            className={classNames(cls.Anchor, {}, [className, cls[theme]])}
            href={href}
            target={target}
        >
            {Svg ? <Svg /> : null}
            {children}
        </a>
    );
});
