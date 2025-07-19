import { classNames } from 'shared/lib/classNames/classNames';
import {
    CSSProperties, FC, ImgHTMLAttributes, memo,
} from 'react';
import cls from './Cover.module.scss';

export enum CoverSize {
    SMALL = 'small',
    LARGE = 'large'
}

interface CoverProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    size?: CoverSize;
}

export const Cover: FC<CoverProps> = memo((props) => {
    const {
        className,
        children,
        size = CoverSize.SMALL,
        src = '#',
        ...otherProps
    } = props;

    const style: CSSProperties = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div
            className={classNames(cls.Cover, {}, [className, cls[size]])}
            {...otherProps}
        >
            <div
                className={cls.content}
            >
                {children}
            </div>
            <div style={style} className={cls.bgImg}>
                <div
                    className={cls.skew}
                >
                    <img
                        src={src}
                        className={cls.skewImg}
                        alt="coverSkew"
                    />
                </div>
            </div>
        </div>
    );
});
