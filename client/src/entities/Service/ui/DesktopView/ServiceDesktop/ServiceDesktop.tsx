import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './ServiceDesktop.module.scss';
import { Service } from '../../../model/types/Service';

interface ServiceDesktopProps {
    className?: string;
    data: Service;
}

export const ServiceDesktop = memo((props: ServiceDesktopProps) => {
    const {
        className,
        data,
    } = props;

    return (
        <VStack
            className={classNames(cls.ServiceDesktop, {}, [className])}
        >
            as
        </VStack>
    );
});
