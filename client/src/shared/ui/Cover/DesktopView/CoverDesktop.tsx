import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, HTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { Transition } from 'react-transition-group';
import cls from './CoverDesktop.module.scss';

export enum CoverDesktopSize {
    SMALL = 'small',
    LARGE = 'large'
}

interface CoverDesktopProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    size?: CoverDesktopSize;
    src: string[];
}

export const CoverDesktop: FC<CoverDesktopProps> = memo((props) => {
    const {
        className,
        children,
        size = CoverDesktopSize.SMALL,
        src = [],
        ...otherProps
    } = props;
    const [currentSrc, setCurrentSrc] = useState<number>(0);
    const [trigger, setTrigger] = useState<boolean>(false);
    const ref = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        ref.current = setTimeout(() => {
            if (currentSrc === src.length - 1) {
                setCurrentSrc(0);
            } else {
                setCurrentSrc((prevState) => prevState + 1);
            }
            setTrigger((prevState) => !prevState);
        }, 20 * 1000);

        return () => {
            clearTimeout(ref.current);
        };
    }, [currentSrc, src.length]);

    return (
        <div
            className={classNames(cls.CoverDesktop, {}, [className, cls[size]])}
            {...otherProps}
        >
            <div
                className={cls.content}
            >
                {children}
            </div>
            <Transition
                in={trigger}
                timeout={1000}
            >
                {(state) => (
                    <div
                        className={`${cls.bgImgWrapper} ${cls[state]}`}
                    >
                        <img
                            src={src[currentSrc]}
                            className={cls.bgImg}
                            alt="bgImg"
                        />
                        <div
                            className={cls.skew}
                        >
                            <img
                                src={src[currentSrc]}
                                className={cls.skewImg}
                                alt="coverDesktopSkew"
                            />
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
});
