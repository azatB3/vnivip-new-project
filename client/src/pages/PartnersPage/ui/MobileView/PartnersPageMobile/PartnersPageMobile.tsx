import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PartnersPageMobile.module.scss';

interface PartnersPageMobileProps {
    className?: string;
}

const PartnersPageMobile = memo((props: PartnersPageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PartnersPageMobile, {}, [className])}>
            PartnersPageMobile
        </div>
    );
});

export default PartnersPageMobile;
