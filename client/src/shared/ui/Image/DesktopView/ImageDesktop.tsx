import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { CSSProperties, memo, useEffect } from 'react';
import photoFrameLowerBlueCorner from 'shared/assets/icons/photo-frame-lower-blue-corner.svg';
import photoFrameUpperBlueCorner from 'shared/assets/icons/photo-frame-upper-blue-corner.svg';
import photoFrameLowerWhiteCorner from 'shared/assets/icons/photo-frame-lower-white-corner.svg';
import photoFrameUpperWhiteCorner from 'shared/assets/icons/photo-frame-upper-white-corner.svg';
import photoFrameLowerBlueLargeArrow from 'shared/assets/icons/photo-frame-lower-blue-large-arrow.svg';
import photoFrameUpperBlueLargeArrow from 'shared/assets/icons/photo-frame-upper-blue-large-arrow.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import cls from './ImageDesktop.module.scss';

export enum ImageDesktopFrames {
    ARROW = 'arrow',
    CORNER_BLUE = 'corner_blue',
    CORNER_WHITE = 'corner_white',
}

interface ImageDesktopProps {
    className?: string;
    width?: string;
    height?: string;
    frames?: ImageDesktopFrames;
    src: string;
    posY?: string;
    posX?: string;
}

export const ImageDesktop = memo((props: ImageDesktopProps) => {
    const {
        className,
        width = '100',
        height = '100',
        frames,
        src,
        posY,
        posX,
    } = props;
    const { t } = useTranslation();

    const mapSvgToImageFrames: Record<ImageDesktopFrames, any> = {
        [ImageDesktopFrames.CORNER_WHITE]: {
            upper: photoFrameUpperWhiteCorner,
            lower: photoFrameLowerWhiteCorner,
        },
        [ImageDesktopFrames.CORNER_BLUE]: {
            upper: photoFrameUpperBlueCorner,
            lower: photoFrameLowerBlueCorner,
        },
        [ImageDesktopFrames.ARROW]: {
            upper: photoFrameUpperBlueLargeArrow,
            lower: photoFrameLowerBlueLargeArrow,
        },
    };

    const style: CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPositionY: posY ? `${posY}%` : 'center',
        backgroundPositionX: posY ? `${posX}%` : 'center',
    };

    return (
        <div
            style={style}
            className={classNames(cls.ImageDesktop, {}, [className, cls.switched])}
        >
            {frames && (
                <Icon
                    Svg={mapSvgToImageFrames[frames].upper}
                    theme={IconTheme.CLEAN}
                    className={frames === ImageDesktopFrames.ARROW
                        ? cls.arrowUpper
                        : cls.cornerUpper}
                />
            )}
            {frames && (
                <Icon
                    Svg={mapSvgToImageFrames[frames].lower}
                    theme={IconTheme.CLEAN}
                    className={frames === ImageDesktopFrames.ARROW
                        ? cls.arrowLower
                        : cls.cornerLower}
                />
            )}
        </div>
    );
});
