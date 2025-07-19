import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    CSSProperties, HTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    WHITE = 'white',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    // desktop
    NUMBERS_DESKTOP = 'numbers_desktop',
    H1_DESKTOP = 'h1_desktop',
    H2_DESKTOP = 'h2_desktop',
    H2_LIGHT_DESKTOP = 'h2_light_desktop',
    H3_DESKTOP = 'h3_desktop',
    H4_DESKTOP = 'h4_desktop',
    H4_MEDIUM_DESKTOP = 'h4_medium_desktop',
    H4_ITALIC_DESKTOP = 'h4_italic_desktop',
    BODY_L_DESKTOP = 'body_l_desktop',
    BODY_DESKTOP = 'body_desktop',
    BODY_S_DESKTOP = 'body_s_desktop',
    BODY_S_MEDIUM_DESKTOP = 'body_s_medium_desktop',
    BODY_FOOTER_DESKTOP = 'body_footer_desktop',
    BUTTON_DESKTOP = 'button_desktop',
    MENU_DESKTOP = 'menu_desktop',
    MENU_CAPS_DESKTOP = 'menu_caps_desktop',
    MENU_LARGE_ITALIC_DESKTOP = 'menu_large_italic_desktop',
    MENU_LARGE_ITALIC_MEDIUM_DESKTOP = 'menu_large_italic_medium_desktop',
    // mobile
    H1_MOBILE = 'h1_mobile',
    H1_MINI_MOBILE = 'h1_mini_mobile',
    H1_MINI_ITALIC_MOBILE = 'h1_mini_italic_mobile',
    H2_MOBILE = 'h2_mobile',
    H2_MEDIUM_MOBILE = 'h2_medium_mobile',
    H2_ITALIC_MOBILE = 'h2_italic_mobile',
    H3_MOBILE = 'h3_mobile',
    H3_MEDIUM_MOBILE = 'h3_medium_mobile',
    BODY_L_MOBILE = 'body_l_mobile',
    BODY_MOBILE = 'body_mobile',
    BODY_MEDIUM_MOBILE = 'body_medium_mobile',
    BODY_MINI_MOBILE = 'body_mini_mobile',
}

interface TextProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: ReactNode;
    theme: TextTheme;
    align?: TextAlign;
    size: TextSize;
    width?: string;
    height?: string;
    isInline?: boolean;
}

type TextTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

const mapSizeToTextTag: Record<TextSize, TextTagType> = {
    // desktop
    [TextSize.NUMBERS_DESKTOP]: 'h1',
    [TextSize.H1_DESKTOP]: 'h1',
    [TextSize.H2_DESKTOP]: 'h2',
    [TextSize.H2_LIGHT_DESKTOP]: 'h2',
    [TextSize.H3_DESKTOP]: 'h3',
    [TextSize.H4_DESKTOP]: 'h4',
    [TextSize.H4_MEDIUM_DESKTOP]: 'h4',
    [TextSize.H4_ITALIC_DESKTOP]: 'h4',
    [TextSize.BODY_L_DESKTOP]: 'p',
    [TextSize.BODY_DESKTOP]: 'p',
    [TextSize.BODY_S_DESKTOP]: 'p',
    [TextSize.BODY_S_MEDIUM_DESKTOP]: 'p',
    [TextSize.BODY_FOOTER_DESKTOP]: 'p',
    [TextSize.BUTTON_DESKTOP]: 'p',
    [TextSize.MENU_DESKTOP]: 'p',
    [TextSize.MENU_CAPS_DESKTOP]: 'p',
    [TextSize.MENU_LARGE_ITALIC_DESKTOP]: 'p',
    [TextSize.MENU_LARGE_ITALIC_MEDIUM_DESKTOP]: 'p',
    // mobile
    [TextSize.H1_MOBILE]: 'h1',
    [TextSize.H1_MINI_MOBILE]: 'h1',
    [TextSize.H1_MINI_ITALIC_MOBILE]: 'h1',
    [TextSize.H2_MOBILE]: 'h2',
    [TextSize.H2_MEDIUM_MOBILE]: 'h2',
    [TextSize.H2_ITALIC_MOBILE]: 'h2',
    [TextSize.H3_MOBILE]: 'h3',
    [TextSize.H3_MEDIUM_MOBILE]: 'h3',
    [TextSize.BODY_L_MOBILE]: 'p',
    [TextSize.BODY_MOBILE]: 'p',
    [TextSize.BODY_MEDIUM_MOBILE]: 'p',
    [TextSize.BODY_MINI_MOBILE]: 'p',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        theme,
        align = TextAlign.LEFT,
        size,
        children,
        width,
        height,
        isInline,
        ...otherProps
    } = props;

    const TextTag = mapSizeToTextTag[size];

    const classes = [
        className,
        cls[theme],
        cls[size],
        cls[align],
    ];

    const style: CSSProperties = {
        width: width!! && width.includes('%') ? width : `${width}px`,
        height: height!! && height.includes('%') ? height : `${height}px`,
        display: isInline ? 'inline' : undefined,
    };

    return (
        <TextTag
            className={classNames(cls.Text, {}, classes)}
            style={style}
            {...otherProps}
        >
            {children}
        </TextTag>
    );
});
