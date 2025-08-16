import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './AdministrationPageMobile.module.scss';

interface AdministrationPageMobileProps {
    className?: string;
}

const AdministrationPageMobile = memo((props: AdministrationPageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.AdministrationPageMobile, {}, [className])}>
            <VStack
                maxW
                maxH
            >
                AdministrationPageMobile
            </VStack>
        </Page>
    );
});

export default AdministrationPageMobile;
