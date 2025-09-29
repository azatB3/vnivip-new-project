import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { Page } from 'widgets/Page';
import { HStack, VStack } from 'shared/ui/Stack';
import { CoverDesktop, CoverDesktopSize } from 'shared/ui/Cover/DesktopView/CoverDesktop';
import books1Img from 'shared/assets/images/books1.webp';
import books2Img from 'shared/assets/images/books2.webp';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ServiceDesktop } from 'entities/Service';
import {
    ServicesPageTitleDesktop,
} from '../ServicesPageTitleDesktop/ServicesPageTitleDesktop';
import { getServicesPageInited, getServicesPageServices } from '../../../model/selectors/getServicesPage';
import cls from './ServicesPageDesktop.module.scss';
import { ServicesPageActions, ServicesPageReducer } from '../../../model/slices/ServicesPageSlice';
import { fetchServices } from '../../../model/services/fetchServices';

interface ServicesPageDesktopProps {
    className?: string;
}

const reducers: ReducersList = {
    servicesPage: ServicesPageReducer,
};

const ServicesPageDesktop = memo((props: ServicesPageDesktopProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const inited = useSelector(getServicesPageInited);
    const services = useSelector(getServicesPageServices);

    useEffect(() => {
        if (!inited) {
            dispatch(fetchServices());
            dispatch(ServicesPageActions.init());
        }
    }, [dispatch, inited]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page className={classNames(cls.ServicesPageDesktop, {}, [className])}>
                <VStack
                    maxW
                    maxH
                    gap={50}
                    paddingB={100}
                >
                    <CoverDesktop
                        size={CoverDesktopSize.SMALL}
                        images={[
                            books1Img,
                            books2Img,
                        ]}
                    />
                    <VStack
                        maxW
                        paddingL={50}
                        paddingR={50}
                        align="center"
                        gap={100}
                    >
                        <ServicesPageTitleDesktop />
                        {!!services?.length && (
                            <HStack
                                maxW
                                gap={30}
                                wrap="wrap"
                            >
                                {services.map((item, index) => (
                                    <ServiceDesktop
                                        data={item}
                                        key={index}
                                    />
                                ))}
                            </HStack>
                        )}
                    </VStack>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ServicesPageDesktop;
