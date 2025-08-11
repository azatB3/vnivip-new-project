/* eslint-disable react-hooks/exhaustive-deps */
import { classNames } from 'shared/lib/classNames/classNames';
import { forwardRef, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { HStack, VStack } from 'shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { News, NewsDesktop } from 'entities/News';
import { GridComponents, GridItemContent, VirtuosoGrid } from 'react-virtuoso';
import { APP_DESKTOP_ID } from 'shared/const/components';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { fetchNewsNextPage } from '../../../model/services/fetchNewsNextPage';
import cls from './NewsPageListDesktop.module.scss';
import { getNewsPageIsLoading } from '../../../model/selectors/getNewsPage';
import { getNews } from '../../../model/slices/NewsPageSlice';

interface NewsPageListDesktopProps {
    className?: string;
}

const getSkeletons = () => {
    return (
        <HStack
            wrap="wrap"
            gap={20}
            maxW
            style={{
                marginTop: '20px',
            }}
        >
            {new Array(8).fill(0).map(() => (
                <Skeleton
                    width="calc((100% - 60px) / 4)"
                    height="35vh"
                    borderR="10px"
                />
            ))}
        </HStack>
    );
};

export const NewsPageListDesktop = memo((props: NewsPageListDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('newsPage');
    const dispatch = useAppDispatch();
    const news = useSelector(getNews.selectAll);
    const isLoading = useSelector(getNewsPageIsLoading);

    const itemRenderer: GridItemContent<News, any> = useCallback((index, item) => (
        <NewsDesktop
            data={item}
            key={index}
        />
    ), []);

    const onScrollEnd = useCallback(() => {
        dispatch(fetchNewsNextPage({ limit: 8 }));
    }, [dispatch]);

    const debouncedOnScrollEnd = useDebounce(onScrollEnd, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const gridComponents: GridComponents = {
        // eslint-disable-next-line react/display-name
        List: forwardRef<HTMLDivElement>(({ style, children, ...props }: any, ref) => (
            <div
                ref={ref}
                {...props}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    ...style,
                }}
            >
                {children}
            </div>
        )),
        // eslint-disable-next-line react/no-unstable-nested-components
        Item: ({ index, children }: any) => (
            <div
                {...props}
                key={index}
                style={{
                    width: 'calc((100% - 60px) / 4)',
                    minHeight: '35vh',
                }}
            >
                {children}
            </div>
        ),
    };

    return (
        <VStack
            className={classNames(cls.NewsPageListDesktop, {}, [className])}
            maxW
        >
            {!news.length && !isLoading
                ? (
                    <HStack
                        maxH
                        maxW
                        justify="center"
                        align="center"
                        paddingT={100}
                        paddingB={100}
                    >
                        <Text
                            theme={TextTheme.GREY}
                            size={TextSize.H4_MEDIUM_DESKTOP}
                        >
                            {t('Новостей пока нет')}
                        </Text>
                    </HStack>
                )
                : null}
            {!!news.length && (
                <VirtuosoGrid
                    style={{
                        width: '100%',
                    }}
                    totalCount={news.length}
                    data={news}
                    components={gridComponents}
                    itemContent={itemRenderer}
                    customScrollParent={document.getElementById(APP_DESKTOP_ID) as HTMLElement}
                    useWindowScroll
                    endReached={debouncedOnScrollEnd}
                    overscan={200}
                />
            )}
            {isLoading && getSkeletons()}
        </VStack>
    );
});
