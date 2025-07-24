import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import linkIcon from 'shared/assets/icons/link-24-24-black.svg';
import { News } from 'entities/News';
import cls from './SmallNewsDesktop.module.scss';

interface SmallNewsDesktopProps {
    className?: string;
    data: News;
}

export const SmallNewsDesktop = memo((props: SmallNewsDesktopProps) => {
    const {
        className,
        data,
    } = props;

    return (
        <Card
            className={classNames(cls.SmallNewsDesktop, {}, [className])}
            role="link"
            paddingL={20}
            paddingR={20}
            paddingT={10}
            paddingB={20}
            borderR={10}
        >
            <HStack
                maxW
                justify="between"
                align="center"
            >
                <Text
                    theme={TextTheme.GREY3}
                    size={TextSize.BODY_S_MEDIUM_DESKTOP}
                >
                    {data.date}
                </Text>
                <Icon
                    theme={IconTheme.CLEAN}
                    Svg={linkIcon}
                />
            </HStack>
            <Text
                theme={TextTheme.DARK}
                size={TextSize.BODY_MEDIUM_DESKTOP}
                className={cls.title}
            >
                {data.data.title}
            </Text>
        </Card>
    );
});
