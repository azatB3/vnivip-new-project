import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './ScienceDepartmentsPageMobile.module.scss';

interface ScienceDepartmentsPageMobileProps {
    className?: string;
}

const ScienceDepartmentsPageMobile = memo((props: ScienceDepartmentsPageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ScienceDepartmentsPageMobile, {}, [className])}>
            <VStack
                maxW
                maxH
            >
                ScienceDepartmentsPageMobile
            </VStack>
        </Page>
    );
});

export default ScienceDepartmentsPageMobile;
