import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import linkIcon from 'shared/assets/icons/link-24-24-black.svg';
import { News } from 'entities/News';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    return (
        <Card
            className={classNames(cls.SmallNewsDesktop, {}, [className])}
            role="link"
            paddingL={20}
            paddingR={20}
            paddingT={10}
            paddingB={50}
            borderR={10}
            onClick={() => navigate(`${RoutePath.news}/${data.id}`)}
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
                    {new Date(data.createdAt).toLocaleDateString().replace(/\./g, '/')}
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
                {data.title}
            </Text>
        </Card>
    );
});
