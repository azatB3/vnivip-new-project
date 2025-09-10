import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CarouselDesktop } from 'shared/ui/Carousel/DesktopView/CarouselDesktop';
import partner1Icon from 'shared/assets/icons/partner1-100-100.svg';
import partner2Icon from 'shared/assets/icons/partner2-100-100.svg';
import partner4Icon from 'shared/assets/icons/partner4-100-100.svg';
import partner5Icon from 'shared/assets/icons/partner5-230-100.svg';
import cls from './MainPagePartnersDesktop.module.scss';

interface MainPagePartnersDesktopProps {
    className?: string;
}

export const MainPagePartnersDesktop = memo((props: MainPagePartnersDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('mainPage');

    return (
        <VStack
            className={classNames(cls.MainPagePartnersDesktop, {}, [className])}
            gap={100}
            maxW
        >
            <Text
                size={TextSize.H1_DESKTOP}
                theme={TextTheme.DARK2}
                className={cls.title}
            >
                {t('ПАРТНЕРЫ')}
            </Text>
            <CarouselDesktop
                icons={[
                    partner1Icon,
                    partner2Icon,
                    partner4Icon,
                    partner5Icon,
                ]}
            />
        </VStack>
    );
});
