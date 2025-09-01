import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { useParams } from 'react-router-dom';
import { CoverDesktop, CoverDesktopSize } from 'shared/ui/Cover/DesktopView/CoverDesktop';
import news1Img from 'shared/assets/images/news1.jpg';
import news2Img from 'shared/assets/images/news2.jpg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ParagraphDesktop } from 'entities/Paragraph';
import { Page } from 'widgets/Page';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { getNewsDetailsPageInited, getNewsDetailsPageNews } from '../../../model/selectors/getNewsDetailsPage';
import { NewsDetailsPageReducer } from '../../../model/slices/NewsDetailsPageSlice';
import { fetchNewFullNews } from '../../../model/services/fetchNewFullNews';
import cls from './NewsDetailsPageDesktop.module.scss';

interface NewsDetailsPageDesktopProps {
    className?: string;
}

const reducers: ReducersList = {
    newsDetailsPage: NewsDetailsPageReducer,
};

const NewsDetailsPageDesktop = memo((props: NewsDetailsPageDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('newsDetailsPage');
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const inited = useSelector(getNewsDetailsPageInited);
    const news = useSelector(getNewsDetailsPageNews);

    useEffect(() => {
        dispatch(fetchNewFullNews({ newsId: Number(id) }));
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page
                className={classNames(cls.NewsDetailsPageDesktop, {}, [className])}
            >
                <VStack
                    align="center"
                    maxW
                >
                    <CoverDesktop
                        size={CoverDesktopSize.SMALL}
                        images={[
                            news2Img,
                            news1Img,
                        ]}
                    />
                    {news && (
                        <VStack
                            className={cls.contentWrapper}
                            paddingT={50}
                            paddingL={30}
                            paddingR={30}
                            paddingB={50}
                            gap={80}
                        >
                            <VStack
                                gap={20}
                                maxW
                                align="center"
                            >
                                <HStack
                                    maxW
                                    paddingB={50}
                                >
                                    <Text
                                        theme={TextTheme.GREY}
                                        size={TextSize.BODY_S_DESKTOP}
                                    >
                                        {`${t('Дата создания')}: ${new Date(news.createdAt).toLocaleDateString().replace(/\./g, '/')}`}
                                    </Text>
                                </HStack>
                                <Text
                                    theme={TextTheme.DARK2}
                                    size={TextSize.H2_DESKTOP}
                                    align={TextAlign.CENTER}
                                >
                                    {news?.title}
                                </Text>
                                <Text
                                    theme={TextTheme.DARK2}
                                    size={TextSize.BODY_L_DESKTOP}
                                    align={TextAlign.CENTER}
                                >
                                    {news?.description}
                                </Text>
                            </VStack>
                            <VStack
                                gap={30}
                                maxW
                            >
                                {news?.paragraphs.map((item) => (
                                    <ParagraphDesktop
                                        data={item}
                                    />
                                ))}
                            </VStack>
                        </VStack>
                    )}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default NewsDetailsPageDesktop;
