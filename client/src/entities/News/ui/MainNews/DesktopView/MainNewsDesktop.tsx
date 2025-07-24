import { classNames } from 'shared/lib/classNames/classNames';
import {
    CSSProperties, FC, HTMLAttributes, memo,
} from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import linkIcon from 'shared/assets/icons/link-48-48-white.svg';
import { News } from '../../../model/types/News';
import cls from './MainNewsDesktop.module.scss';

interface MainNewsDesktopProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    data: News;
}

export const MainNewsDesktop: FC<MainNewsDesktopProps> = memo((props: MainNewsDesktopProps) => {
    const {
        className,
        data,
    } = props;

    const style: CSSProperties = {
        backgroundImage: `url(${data.data.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div
            className={classNames(cls.MainNewsDesktop, {}, [className])}
            role="link"
        >
            <div
                className={cls.cover}
                style={style}
            />
            <VStack
                className={cls.content}
                maxW
                maxH
                paddingL={30}
                paddingR={30}
                paddingT={10}
                paddingB={30}
                justify="between"
            >
                <HStack
                    maxW
                    justify="between"
                    align="center"
                >
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.BODY_DESKTOP}
                    >
                        {data.date}
                    </Text>
                    <Icon
                        theme={IconTheme.CLEAN}
                        Svg={linkIcon}
                    />
                </HStack>
                <VStack
                    gap={20}
                    maxW
                >
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.H4_MEDIUM_DESKTOP}
                    >
                        {data.data.title}
                    </Text>
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.BODY_S_DESKTOP}
                        className={cls.description}
                    >
                        {data.data.description}
                    </Text>
                </VStack>
            </VStack>
        </div>
    );
});
