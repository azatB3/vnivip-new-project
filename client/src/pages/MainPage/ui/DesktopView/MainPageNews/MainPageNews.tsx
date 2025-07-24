import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { MainNewsDesktop, News } from 'entities/News';
import testImg from 'shared/assets/images/test.jpg';
import { SmallNewsDesktop } from 'entities/News/ui/SmallNews/DesktopView/SmallNewsDesktop';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import ArrowRightIcon from 'shared/assets/icons/arrow-right-50-39-white.svg';
import cls from './MainPageNews.module.scss';

const mainNews: News = {
    id: 1,
    date: '11/22/2001',
    data: {
        title: 'Все на субботник',
        description: 'Сотрудники ВНИВИП провели субботник на территории Института. в этом году мероприятие посвящено 80-летию Победы в Великой Отечественной войне.',
        cover: testImg,
        paragraphs: [
            {
                text: 'asda',
                img: 'asd',
            },
        ],
    },
};

export const MainPageNews = memo(() => {
    const { t } = useTranslation('mainPage');

    return (
        <VStack
            maxW
            ContentTag="section"
            gap={20}
            align="center"
        >
            <VStack
                className={cls.titleWrapper}
                align="center"
                maxW
            >
                <div
                    className={cls.title}
                >
                    <Text
                        theme={TextTheme.DARK2}
                        size={TextSize.LARGE_DESKTOP}
                        className={cls.titleText}
                    >
                        {t('СОБЫТИЯ')}
                    </Text>
                    <Spinner
                        className={cls.spinner}
                    />
                </div>
            </VStack>
            <VStack
                className={cls.newsWrapper}
                gap={30}
            >
                <MainNewsDesktop
                    data={mainNews}
                />
                <HStack
                    maxW
                    align="center"
                    gap={30}
                >
                    <SmallNewsDesktop
                        data={mainNews}
                    />
                    <SmallNewsDesktop
                        data={mainNews}
                    />
                    <SmallNewsDesktop
                        data={mainNews}
                    />
                    <SmallNewsDesktop
                        data={mainNews}
                    />
                    <HStack
                        maxH
                        justify="center"
                        align="center"
                        className={cls.arrowWrapper}
                    >
                        <Icon
                            theme={IconTheme.BLUE}
                            Svg={ArrowRightIcon}
                            className={cls.arrow}
                        />
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    );
});
