import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Anchor, AnchorTheme } from 'shared/ui/Anchor/Anchor';
import { useTranslation } from 'react-i18next';
import cls from './PartnersPageCardDesktop.module.scss';

interface PartnersPageCardDesktopProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    name: string;
    description: string;
    link: string;
}

export const PartnersPageCardDesktop = memo((props: PartnersPageCardDesktopProps) => {
    const {
        className,
        Svg,
        name,
        description,
        link,
    } = props;
    const { t } = useTranslation('partnersPage');

    return (
        <VStack
            className={classNames(cls.PartnersPageCardDesktop, {}, [className])}
            gap={20}
            align="center"
            maxW
            paddingT={50}
            paddingL={50}
            paddingR={50}
            paddingB={30}
        >
            <Icon
                Svg={Svg}
                theme={IconTheme.CLEAN}
            />
            <VStack
                maxW
                align="center"
                gap={30}
            >
                <Text
                    theme={TextTheme.DARK2}
                    size={TextSize.H4_MEDIUM_DESKTOP}
                    className={cls.h2}
                    align={TextAlign.CENTER}
                >
                    {name}
                </Text>
                <Text
                    theme={TextTheme.DARK}
                    size={TextSize.BODY_S_DESKTOP}
                    className={cls.h2}
                    align={TextAlign.JUSTIFY}
                    textIndent
                >
                    {description}
                </Text>
                <HStack
                    maxW
                    justify="end"
                    paddingT={30}
                >
                    <Anchor
                        theme={AnchorTheme.BLUE}
                        href={link}
                    >
                        {t('Официальная веб-страница организации')}
                    </Anchor>
                </HStack>
            </VStack>
        </VStack>
    );
});
