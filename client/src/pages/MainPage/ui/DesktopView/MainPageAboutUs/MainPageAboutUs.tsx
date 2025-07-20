import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card/Card';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ImageDesktop } from 'shared/ui/Image';
import laboratoryImg from 'shared/assets/images/laboratory1.jpg';

export const MainPageAboutUs = memo(() => {
    const { t } = useTranslation('mainPage');

    return (
        <VStack
            maxW
            ContentTag="section"
            gap={40}
        >
            <Card
                padding={30}
                borderRbr={50}
                borderRbl={50}
                borderRtl={50}
                maxW
            >
                <VStack
                    gap={30}
                >
                    <Text
                        size={TextSize.H1_DESKTOP}
                        theme={TextTheme.DARK2}
                    >
                        {t('О нас')}
                    </Text>
                    <Text
                        size={TextSize.BODY_L_DESKTOP}
                        theme={TextTheme.DARK}
                        textIndent
                    >
                        {t('текст о нас верхний')}
                    </Text>
                </VStack>
            </Card>
            <HStack
                gap={40}
                paddingL={50}
                paddingR={50}
                maxW
                align="center"
            >
                <ImageDesktop
                    src={laboratoryImg}
                    borderR={50}
                    width="50%"
                    height="70vh"
                />
                <Text
                    size={TextSize.BODY_DESKTOP}
                    theme={TextTheme.DARK}
                >
                    {t('текст о нас нижний')}
                </Text>
            </HStack>
        </VStack>
    );
});
