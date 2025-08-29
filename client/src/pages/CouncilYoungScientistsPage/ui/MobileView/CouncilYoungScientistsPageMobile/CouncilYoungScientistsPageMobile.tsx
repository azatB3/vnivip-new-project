import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './CouncilYoungScientistsPageMobile.module.scss';

interface CouncilYoungScientistsPageMobileProps {
    className?: string;
}

const CouncilYoungScientistsPageMobile = memo((props: CouncilYoungScientistsPageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.CouncilYoungScientistsPageMobile, {}, [className])}>
            <VStack
                maxW
                maxH
            >
                CouncilYoungScientistsPageMobile
            </VStack>
        </Page>
    );
});

export default CouncilYoungScientistsPageMobile;
