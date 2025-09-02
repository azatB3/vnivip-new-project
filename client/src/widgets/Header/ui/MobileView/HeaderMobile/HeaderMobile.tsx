import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { HEADER_ID } from 'shared/const/components';
import { HStack } from 'shared/ui/Stack';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import mainLogoSmall from 'shared/assets/icons/main-logo-small.svg';
import burgerMenuDefaultIcon from 'shared/assets/icons/burger-menu-33-33-white-default.svg';
import burgerMenuActiveIcon from 'shared/assets/icons/burger-menu-33-33-white-active.svg';
import { AppLinkDesktop } from 'shared/ui/AppLink/DesktopView/AppLinkDesktop';
import { BurgerMenuMobile } from 'widgets/BurgerMenu';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './HeaderMobile.module.scss';

interface HeaderMobileProps {
    className?: string;
    isFixed?: boolean;
}

export const HeaderMobile = memo((props: HeaderMobileProps) => {
    const {
        className,
        isFixed = false,
    } = props;
    const { t } = useTranslation();
    const [isOpenBurgerMenu, bindUseModal] = useModal();

    const mods: Mods = {
        [cls.fixed]: isFixed,
    };

    return (
        <HStack
            className={classNames(cls.HeaderMobile, mods, [className])}
            id={HEADER_ID}
            ContentTag="header"
            justify="between"
            align="center"
        >
            <AppLinkDesktop
                to={RoutePath.main}
            >
                <Icon
                    Svg={mainLogoSmall}
                    theme={IconTheme.CLICKABLE}
                />
            </AppLinkDesktop>
            {isOpenBurgerMenu && (
                <Portal>
                    <Icon
                        Svg={burgerMenuActiveIcon}
                        theme={IconTheme.CLICKABLE}
                        onClick={bindUseModal.onCloseModal}
                        className={cls.burgerIconAbsolute}
                    />
                </Portal>
            )}
            {!isOpenBurgerMenu && (
                <Icon
                    Svg={burgerMenuDefaultIcon}
                    theme={IconTheme.CLICKABLE}
                    onClick={bindUseModal.onShowModal}
                />
            )}
            <BurgerMenuMobile
                isOpen={isOpenBurgerMenu}
                onClose={bindUseModal.onCloseModal}
            />
        </HStack>
    );
});
