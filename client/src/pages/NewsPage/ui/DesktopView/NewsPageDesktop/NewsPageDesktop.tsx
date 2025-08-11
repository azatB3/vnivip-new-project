import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Cover, CoverSize } from 'shared/ui/Cover/DesktopView/Cover';
import cover3Img from 'shared/assets/images/cover3.jpg';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page';
import { NewsPageListDesktop } from '../NewsPageListDesktop/NewsPageListDesktop';
import { NewsPageReducer } from '../../../model/slices/NewsPageSlice';
import cls from './NewsPageDesktop.module.scss';
import { NewsPageTitleDesktop } from '../NewsPageTitleDesktop/NewsPageTitleDesktop';
import { fetchNews } from '../../../model/services/fetchNews';

interface NewsPageDesktopProps {
    className?: string;
}

const reducers: ReducersList = {
    newsPage: NewsPageReducer,
};

const NewsPageDesktop = memo((props: NewsPageDesktopProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNews({ limit: 9 }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.NewsPageDesktop, {}, [className])}
            >
                <VStack
                    maxH
                    maxW
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
                        <NewsPageTitleDesktop />
                        <NewsPageListDesktop />
                    </VStack>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default NewsPageDesktop;
