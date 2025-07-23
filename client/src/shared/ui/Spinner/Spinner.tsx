import { classNames } from 'shared/lib/classNames/classNames';
import { FC, HTMLAttributes, memo } from 'react';
import cls from './Spinner.module.scss';

export const Spinner: FC<HTMLAttributes<HTMLDivElement>> = memo(({ className }) => {
    return (
        <div className={classNames(cls.Spinner, {}, [className])}>
            <div className={cls.circle1}>
                <div className={cls.ball11} />
                <div className={cls.ball12} />
                <div className={cls.ball13} />
            </div>
            <div className={cls.circle2}>
                <div className={cls.ball21} />
                <div className={cls.ball22} />
            </div>
            <div className={cls.circle3}>
                <div className={cls.ball31} />
            </div>
        </div>
    );
});
