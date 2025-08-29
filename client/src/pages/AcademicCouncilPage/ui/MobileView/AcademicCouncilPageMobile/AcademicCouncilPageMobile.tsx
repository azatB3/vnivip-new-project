import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './AcademicCouncilPageMobile.module.scss';

interface AcademicCouncilPageMobileProps {
    className?: string;
}

const AcademicCouncilPageMobile = memo((props: AcademicCouncilPageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.AcademicCouncilPageMobile, {}, [className])}>
            <VStack
                maxW
                maxH
            >
                AcademicCouncilPageMobile
            </VStack>
        </Page>
    );
});

export default AcademicCouncilPageMobile;
