import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Carousel.module.scss';

interface CarouselProps {
    className?: string;
    icons?: [
        React.VFC<React.SVGProps<SVGSVGElement>>,
        React.VFC<React.SVGProps<SVGSVGElement>>,
        React.VFC<React.SVGProps<SVGSVGElement>>,
        React.VFC<React.SVGProps<SVGSVGElement>>,
        React.VFC<React.SVGProps<SVGSVGElement>>,
    ];
}

export const Carousel = memo((props: CarouselProps) => {
    const {
        className,
        icons,
    } = props;

    return (
        <div className={classNames(cls.Carousel, {}, [className])}>
            <div
                className={cls.slideTrack}
            >
                <div
                    className={cls.slideWrapper}
                >
                    {icons?.map((Icon) => (
                        <div
                            className={cls.partner}
                        >
                            <Icon />
                        </div>
                    ))}
                    {icons?.map((Icon) => (
                        <div
                            className={cls.partner}
                        >
                            <Icon />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
