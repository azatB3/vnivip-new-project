import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, CSSProperties, FC, memo,
} from 'react';
import ArrowRightIcon from 'shared/assets/icons/arrow-right-18-14-fill-none.svg';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAN = 'clean',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    WHITE = 'white'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
    width?: number;
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        type = 'button',
        theme = ButtonTheme.CLEAN,
        ...otherProps
    } = props;

    return (
        <button
            type={type}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {
                theme === ButtonTheme.OUTLINE
                || theme === ButtonTheme.PRIMARY
                    ? [
                        <div
                            className={cls.text}
                        >
                            {children}
                        </div>,
                        <ArrowRightIcon className={cls.arrow} />,
                        <div className={cls.animBg} />,
                    ]
                    : children
            }
        </button>
    );
});
