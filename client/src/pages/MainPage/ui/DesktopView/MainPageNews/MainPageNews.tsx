import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import cls from './MainPageNews.module.scss';

export const MainPageNews = memo(() => {
    const { t } = useTranslation('mainPage');

    return (
        <VStack
            maxW
            ContentTag="section"
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
        </VStack>
    );
});
