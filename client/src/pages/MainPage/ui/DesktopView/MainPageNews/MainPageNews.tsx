import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { MainNewsDesktop, News } from 'entities/News';
import testImg from 'shared/assets/images/test.jpg';
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
            <MainNewsDesktop
                data={mainNews}
            />
        </VStack>
    );
});
