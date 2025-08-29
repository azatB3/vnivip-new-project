import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { MemberSections, MemberSmallDesktop } from 'entities/Member';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './ScienceDepartmentsPageVirologyDesktop.module.scss';
import { getScienceDepartmentsPageMembersVirology } from '../../../model/selectors/getScienceDepartmentsPage';

interface ScienceDepartmentsPageVirologyDesktopProps {
    className?: string;
}

export const ScienceDepartmentsPageVirologyDesktop = memo((props: ScienceDepartmentsPageVirologyDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('scienceDepartmentsPage');
    const members = useSelector(getScienceDepartmentsPageMembersVirology);

    return (
        <VStack
            maxW
            className={classNames(cls.ScienceDepartmentsPageVirologyDesktop, {}, [className])}
            gap={20}
        >
            <Text
                theme={TextTheme.DARK2}
                size={TextSize.H4_MEDIUM_DESKTOP}
            >
                {t('Отдел вирусологии')}
            </Text>
            {!!members?.length && (
                <HStack
                    maxW
                    gap={50}
                    wrap="wrap"
                >
                    {members.map((item, index) => (
                        <MemberSmallDesktop
                            data={item}
                            key={index}
                        />
                    ))}
                </HStack>
            )}
        </VStack>
    );
});
