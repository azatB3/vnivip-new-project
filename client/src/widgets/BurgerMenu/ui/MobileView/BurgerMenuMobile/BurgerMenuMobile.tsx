import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import { Transition } from 'react-transition-group';
import { HStack, VStack } from 'shared/ui/Stack';
import { LangSwitcher } from 'widgets/LangSwitcher';
import searchIcon from 'shared/assets/icons/search-24-24-white.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    BurgerMenuSpoilerMobile,
} from 'widgets/BurgerMenu/ui/MobileView/BurgerMenuSpoilerMobile/BurgerMenuSpoilerMobile';
import { AppLinkMobile, AppLinkMobileTheme } from 'shared/ui/AppLink/MobileView/AppLinkMobile';
import { BurgerMenuDataSection } from '../../../model/types/BurgerMenuData';
import cls from './BurgerMenuMobile.module.scss';

interface BurgerMenuMobileProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const BurgerMenuMobile = memo((props: BurgerMenuMobileProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    const { t } = useTranslation();

    const aboutInstituteSection: BurgerMenuDataSection = {
        path: RoutePath.about_institute,
        text: t('Об институте'),
        subSections: [
            {
                path: RoutePath.administration,
                text: t('Администрация'),
            },
            {
                path: RoutePath.main,
                text: t('Объявления о конкурсах'),
            },
            {
                path: RoutePath.main,
                text: t('Нормативно-правовые акты'),
            },
            {
                path: RoutePath.main,
                text: t('Информация о закупках'),
            },
            {
                path: RoutePath.main,
                text: t('Вакансии'),
            },
            {
                path: RoutePath.partners,
                text: t('Партнеры'),
            },
        ],
    };

    const educationSection: BurgerMenuDataSection = {
        path: RoutePath.main,
        text: t('Научная и образовательная деятельность'),
        subSections: [
            {
                path: RoutePath.science_departments,
                text: t('Научные отделы'),
            },
            {
                path: RoutePath.academic_council,
                text: t('Ученый совет'),
            },
            {
                path: RoutePath.council_young_scientists,
                text: t('Совет молодых ученых'),
            },
            {
                path: RoutePath.main,
                text: t('Образование'),
            },
            {
                path: RoutePath.main,
                text: t('Научная библиотека'),
            },
        ],
    };

    const servicesSection: BurgerMenuDataSection = {
        path: RoutePath.main,
        text: t('Услуги'),
        subSections: [
            {
                path: RoutePath.main,
                text: t('Корзина'),
            },
        ],
    };

    const closeHandler = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.BurgerMenuMobile, { [cls.opened]: isOpen }, [className])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        <VStack
                            maxW
                            maxH
                            paddingT={70}
                            gap={20}
                        >
                            <HStack
                                maxW
                                justify="between"
                                align="center"
                                paddingL={50}
                                paddingR={50}
                            >
                                <Icon
                                    Svg={searchIcon}
                                    theme={IconTheme.CLICKABLE}
                                />
                                <LangSwitcher />
                            </HStack>
                            <VStack
                                maxW
                                className={cls.sectionsWrapper}
                                padding={20}
                                paddingB={70}
                            >
                                <BurgerMenuSpoilerMobile
                                    section={aboutInstituteSection}
                                    onClose={onClose}
                                />
                                <BurgerMenuSpoilerMobile
                                    section={educationSection}
                                    onClose={onClose}
                                />
                                <BurgerMenuSpoilerMobile
                                    section={servicesSection}
                                    onClose={onClose}
                                />
                                <HStack
                                    maxW
                                    gap={50}
                                    paddingT={30}
                                    paddingB={30}
                                    justify="center"
                                >
                                    <AppLinkMobile
                                        theme={AppLinkMobileTheme.WHITE}
                                        to={RoutePath.news}
                                        onClick={closeHandler}
                                    >
                                        {t('Новости')}
                                    </AppLinkMobile>
                                    <AppLinkMobile
                                        theme={AppLinkMobileTheme.WHITE}
                                        to={RoutePath.news}
                                        onClick={closeHandler}
                                    >
                                        {t('Контакты')}
                                    </AppLinkMobile>
                                </HStack>
                            </VStack>
                        </VStack>
                    </div>
                </div>
            </div>
        </Portal>
    );
});
