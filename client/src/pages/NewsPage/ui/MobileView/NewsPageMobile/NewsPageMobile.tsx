import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NewsPageMobile.module.scss';

interface NewsPageMobileProps {
    className?: string;
}

const NewsPageMobile = memo((props: NewsPageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.NewsPageMobile, {}, [className])}>
            NewsPageMobile
        </div>
    );
});

export default NewsPageMobile;
