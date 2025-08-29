import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './AboutInstitutePageMobile.module.scss';

interface AboutInstitutePageMobileProps {
    className?: string;
}

const AboutInstitutePageMobile = memo((props: AboutInstitutePageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.AboutInstitutePageMobile, {}, [className])}>
            AboutInstitutePageMobile
        </div>
    );
});

export default AboutInstitutePageMobile;
