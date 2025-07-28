import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import mainLogo from 'shared/assets/icons/main-logo.svg';
import searchIcon from 'shared/assets/icons/search-24-24-white.svg';
import { HStack } from 'shared/ui/Stack';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './HeaderDesktop.module.scss';

interface HeaderDesktopProps {
    className?: string;
}

export const HEADER_ID = 'HEADER_ID';

export const HeaderDesktop = memo((props: HeaderDesktopProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    const aboutInstituteLinks = [
        {
            path: RoutePath.main,
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
    ];

    const educationLinks = [
        {
            path: RoutePath.main,
            text: t('Научные отделы'),
        },
        {
            path: RoutePath.main,
            text: t('Ученый совет'),
        },
        {
            path: RoutePath.main,
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
    ];

    const servicesLinks = [
        {
            path: RoutePath.main,
            text: t('Корзина'),
        },
    ];

    return (
        <HStack
            className={classNames(cls.HeaderDesktop, {}, [className])}
            id={HEADER_ID}
            ContentTag="header"
            justify="between"
            align="center"
        >
            <Icon
                Svg={mainLogo}
                theme={IconTheme.CLICKABLE}
            />
            <HStack
                gap={50}
                maxH
                align="center"
            >
                <Dropdown
                    sectionName={t('Об институте')}
                    sectionPath={RoutePath.main}
                    data={aboutInstituteLinks}
                />
                <Dropdown
                    sectionName={t('Научная и образовательная деятельность')}
                    sectionPath={RoutePath.main}
                    data={educationLinks}
                />
                <Dropdown
                    sectionName={t('Услуги')}
                    sectionPath={RoutePath.main}
                    data={servicesLinks}
                />
                <AppLink
                    theme={AppLinkTheme.WHITE}
                    to={RoutePath.main}
                >
                    {t('Новости')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.WHITE}
                    to={RoutePath.main}
                >
                    {t('Партнеры')}
                </AppLink>
            </HStack>
            <HStack
                gap={30}
                className={cls.btns}
                maxH
                align="center"
            >
                <LangSwitcher />
                <Icon
                    Svg={searchIcon}
                    theme={IconTheme.CLICKABLE}
                />
            </HStack>
        </HStack>
    );
});
