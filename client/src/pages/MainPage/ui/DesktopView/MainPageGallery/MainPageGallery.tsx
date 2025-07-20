import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Slider } from 'shared/ui/Slider/DesktopView/Slider';
import laboratory3Img from 'shared/assets/images/laboratory3.jpg';
import laboratory4Img from 'shared/assets/images/laboratory4.jpg';
import laboratory2Img from 'shared/assets/images/laboratory2.jpg';

export const MainPageGallery = memo((props) => {
    const { t } = useTranslation('mainPage');

    return (
        <VStack
            maxW
            ContentTag="section"
        >
            <Slider
                images={[
                    { src: laboratory2Img, alt: 'laboratory2Img' },
                    { src: laboratory3Img, alt: 'laboratory3Img' },
                    { src: laboratory4Img, alt: 'laboratory4Img' },
                ]}
            />
        </VStack>
    );
});
