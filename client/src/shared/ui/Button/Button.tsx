import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAN = 'clean',
    PRIMARY = 'primary',
    WHITE = 'white'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme;
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
            {children}
        </button>
    );
});
