import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { MainNewsDesktop } from 'entities/News';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { getNewsPageIsLoading, getNewsPageMainNews } from '../../../model/selectors/getNewsPage';
import cls from './NewsPageTitleDesktop.module.scss';

interface NewsPageTitleDesktopProps {
    className?: string;
}

export const NewsPageTitleDesktop = memo((props: NewsPageTitleDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('newsPage');
    const mainNews = useSelector(getNewsPageMainNews);
    const isLoading = useSelector(getNewsPageIsLoading);

    const renderMainNews = useCallback(() => {
        if (!mainNews && isLoading) {
            return (
                <Skeleton
                    width="100%"
                    height="35vh"
                    borderR="10px"
                />
            );
        }
        if (!mainNews) {
            return (
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
            );
        }

        return (
            <VStack
                gap={10}
                maxW
                align="end"
                className={cls.mainNewsWrapper}
                paddingT={10}
            >
                <Text
                    theme={TextTheme.GREY}
                    size={TextSize.BODY_S_DESKTOP}
                >
                    {t('Последняя новость')}
                </Text>
                <MainNewsDesktop data={mainNews} />
            </VStack>
        );
    }, [isLoading, mainNews, t]);

    return (
        <VStack
            maxW
            className={classNames(cls.NewsPageTitleDesktop, {}, [className])}
        >
            <HStack
                maxW
            >
                <Text
                    theme={TextTheme.GREY}
                    size={TextSize.BODY_S_DESKTOP}
                >
                    {`[ ${t('События')} ]`}
                </Text>
                <VStack
                    className={cls.titleWrapper}
                    align="center"
                >
                    <VStack
                        gap={10}
                    >
                        <Text
                            theme={TextTheme.DARK2}
                            size={TextSize.H2_DESKTOP}
                        >
                            {t('Новости')}
                        </Text>
                        <Text
                            theme={TextTheme.DARK2}
                            size={TextSize.BODY_S_DESKTOP}
                            className={cls.subtitle}
                        >
                            {t('Следите за нашими новостями, чтобы быть в курсе жизни института')}
                        </Text>
                    </VStack>
                </VStack>
            </HStack>
            {renderMainNews()}
        </VStack>
    );
});
