import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Service } from '../../../model/types/Service';
import cls from './ServiceMobile.module.scss';

interface ServiceMobileProps {
    className?: string;
    data: Service;
}

export const ServiceMobile = memo((props: ServiceMobileProps) => {
    const {
        className,
        data,
    } = props;

    return (
        <VStack
            className={classNames(cls.ServiceMobile, {}, [className])}
        >
            as
        </VStack>
    );
});
