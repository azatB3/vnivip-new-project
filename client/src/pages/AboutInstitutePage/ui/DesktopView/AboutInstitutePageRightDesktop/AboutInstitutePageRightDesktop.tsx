import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './AboutInstitutePageRightDesktop.module.scss';

interface AboutInstitutePageRightDesktopProps {
    className?: string;
}

export const AboutInstitutePageRightDesktop = memo((props: AboutInstitutePageRightDesktopProps) => {
    const {
        className,
    } = props;

    return (
        <VStack
            className={classNames(cls.AboutInstitutePageRightDesktop, {}, [className])}
            padding={10}
        >
            asd
        </VStack>
    );
});
