import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Member } from 'entities/Member';
import { VStack } from 'shared/ui/Stack';
import {
    MemberSmallBottomDesktop,
} from 'entities/Member/ui/MemberSmall/DesktopView/MemberSmallBottomDesktop/MemberSmallBottomDesktop';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import cls from './MemberSmallDesktop.module.scss';
import {
    MemberSmallTopDesktop,
} from '../MemberSmallTopDesktop/MemberSmallTopDesktop';

interface MemberSmallDesktopProps {
    className?: string;
    data: Member;
}

export const MemberSmallDesktop = memo((props: MemberSmallDesktopProps) => {
    const {
        className,
        data,
    } = props;

    return (
        <VStack
            className={classNames(cls.MemberSmallDesktop, {}, [className])}
            justify="between"
            padding={20}
        >
            <MemberSmallTopDesktop data={data} />
            <MemberSmallBottomDesktop data={data} />
        </VStack>
    );
});
