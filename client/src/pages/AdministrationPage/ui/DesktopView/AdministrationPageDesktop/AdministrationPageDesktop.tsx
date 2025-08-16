import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { Cover, CoverSize } from 'shared/ui/Cover/DesktopView/Cover';
import cover3Img from 'shared/assets/images/cover3.jpg';
import {
    AdministrationPageTitleDesktop,
} from '../AdministrationPageTitleDesktop/AdministrationPageTitleDesktop';
import cls from './AdministrationPageDesktop.module.scss';

interface AdministrationPageDesktopProps {
    className?: string;
}

const AdministrationPageDesktop = memo((props: AdministrationPageDesktopProps) => {
    const {
        className,
    } = props;

    return (
        <Page
            className={classNames(cls.AdministrationPageDesktop, {}, [className])}
        >
            <VStack
                maxW
                maxH
                gap={50}
                paddingB={100}
            >
                <Cover
                    size={CoverSize.SMALL}
                    src={cover3Img}
                />
                <VStack
                    paddingL={50}
                    paddingR={50}
                    maxW
                >
                    <AdministrationPageTitleDesktop />
                </VStack>
            </VStack>
        </Page>
    );
});

export default AdministrationPageDesktop;
