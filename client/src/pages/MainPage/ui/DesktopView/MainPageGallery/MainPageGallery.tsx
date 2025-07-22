import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from 'shared/ui/Stack';
import { Slider } from 'shared/ui/Slider/DesktopView/Slider';
import laboratory3Img from 'shared/assets/images/laboratory3.jpg';
import laboratory4Img from 'shared/assets/images/laboratory4.jpg';
import laboratory2Img from 'shared/assets/images/laboratory2.jpg';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import cls from './MainPageGallery.module.scss';

export const MainPageGallery = memo(() => {
    const { t } = useTranslation('mainPage');

    return (
        <VStack
            maxW
            ContentTag="section"
            gap={40}
        >
            <HStack
                maxW
                justify="between"
            >
                <Text
                    theme={TextTheme.GREY}
                    size={TextSize.BODY_S_DESKTOP}
                >
                    {`[ ${t('Об институте')} ]`}
                </Text>
                <Text
                    theme={TextTheme.DARK2}
                    size={TextSize.H2_DESKTOP}
                    className={cls.title}
                >
                    {t('слайдер текст верхний')}
                </Text>
            </HStack>
            <Slider
                images={[
                    { src: laboratory2Img, alt: 'laboratory2Img' },
                    { src: laboratory3Img, alt: 'laboratory3Img' },
                    { src: laboratory4Img, alt: 'laboratory4Img' },
                ]}
            />
            <HStack
                maxW
                justify="between"
                align="end"
            >
                <Text
                    theme={TextTheme.DARK}
                    size={TextSize.BODY_S_DESKTOP}
                    className={cls.description}
                >
                    {t('слайдер текст нижний')}
                </Text>
                <Button>
                    {t('Об институте')}
                </Button>
            </HStack>
        </VStack>
    );
});
