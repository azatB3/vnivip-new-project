import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { CSSProperties, memo } from 'react';
import photoFrameLowerBlueCorner from 'shared/assets/icons/photo-frame-lower-blue-corner.svg';
import photoFrameUpperBlueCorner from 'shared/assets/icons/photo-frame-upper-blue-corner.svg';
import photoFrameLowerWhiteCorner from 'shared/assets/icons/photo-frame-lower-white-corner.svg';
import photoFrameUpperWhiteCorner from 'shared/assets/icons/photo-frame-upper-white-corner.svg';
import photoFrameLowerBlueSmallArrow from 'shared/assets/icons/photo-frame-lower-blue-small-arrow.svg';
import photoFrameUpperBlueSmallArrow from 'shared/assets/icons/photo-frame-upper-blue-small-arrow.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import cls from './ImageMobile.module.scss';

export enum ImageMobileFrames {
    ARROW = 'arrow',
    CORNER_BLUE = 'corner_blue',
    CORNER_WHITE = 'corner_white',
}

interface ImageMobileProps {
    className?: string;
    width?: string;
    height?: string;
    frames?: ImageMobileFrames;
    src: string;
    posY?: string;
    posX?: string;
}

export const ImageMobile = memo((props: ImageMobileProps) => {
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

    const mapSvgToImageFrames: Record<ImageMobileFrames, any> = {
        [ImageMobileFrames.CORNER_WHITE]: {
            upper: photoFrameUpperWhiteCorner,
            lower: photoFrameLowerWhiteCorner,
        },
        [ImageMobileFrames.CORNER_BLUE]: {
            upper: photoFrameUpperBlueCorner,
            lower: photoFrameLowerBlueCorner,
        },
        [ImageMobileFrames.ARROW]: {
            upper: photoFrameUpperBlueSmallArrow,
            lower: photoFrameLowerBlueSmallArrow,
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
            className={classNames(cls.ImageMobile, {}, [className, cls.switched])}
        >
            {frames && (
                <Icon
                    Svg={mapSvgToImageFrames[frames].upper}
                    theme={IconTheme.CLEAN}
                    className={frames === ImageMobileFrames.ARROW
                        ? cls.arrowUpper
                        : cls.cornerUpper}
                />
            )}
            {frames && (
                <Icon
                    Svg={mapSvgToImageFrames[frames].lower}
                    theme={IconTheme.CLEAN}
                    className={frames === ImageMobileFrames.ARROW
                        ? cls.arrowLower
                        : cls.cornerLower}
                />
            )}
        </div>
    );
});
