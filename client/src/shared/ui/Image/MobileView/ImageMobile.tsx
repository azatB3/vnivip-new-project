import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { CSSProperties, FC, memo } from 'react';
import cls from './ImageMobile.module.scss';

type ImageNumbers =
    4
    | 8
    | 16
    | 32
    | 64
    | 128
    | 10
    | 20
    | 30
    | 40
    | 50
    | 60
    | 70
    | 80
    | 90
    | 100
    | 110
    | 120;

const borderRClasses: Record<ImageNumbers, string> = {
    4: cls.borderR4,
    8: cls.borderR8,
    16: cls.borderR16,
    32: cls.borderR32,
    64: cls.borderR64,
    128: cls.borderR128,
    10: cls.borderR10,
    20: cls.borderR20,
    30: cls.borderR30,
    40: cls.borderR40,
    50: cls.borderR50,
    60: cls.borderR60,
    70: cls.borderR70,
    80: cls.borderR80,
    90: cls.borderR90,
    100: cls.borderR100,
    110: cls.borderR110,
    120: cls.borderR120,
};

interface ImageMobileProps extends React.ImgHTMLAttributes<HTMLImageElement>{
    borderR?: ImageNumbers;
    maxW?: boolean;
    width?: number;
    height?: number;
}

export const ImageMobile: FC<ImageMobileProps> = memo((props) => {
    const {
        className,
        alt = '',
        src,
        borderR,
        maxW,
        height = 200,
        width = 200,
    } = props;

    const classes: (string | undefined)[] = [
        className,
        borderR && borderRClasses[borderR],
        maxW ? cls.maxW : undefined,
    ];

    const style: CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
    };

    return (
        <img
            alt={alt}
            style={style}
            src={src}
            className={classNames(cls.ImageDesktop, {}, classes)}
        />
    );
});
