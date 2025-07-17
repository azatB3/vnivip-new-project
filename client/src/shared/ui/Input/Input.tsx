import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import circleExclamationIcon from 'shared/assets/icons/circle-exclamation.svg';
import ruFlagInputIcon from 'shared/assets/icons/ru-flag-input.svg';
import { Icon, IconTheme } from '../Icon/Icon';
import { HStack, VStack } from '../Stack';
import { Text, TextSize, TextTheme } from '../Text/Text';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    isRequired?: boolean;
    isEmptyError?: boolean;
    isNumber?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        isRequired = false,
        isEmptyError = false,
        isNumber = false,
        ...otherProps
    } = props;
    const { t } = useTranslation('translation');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isRed, setIsRed] = useState<boolean>(isEmptyError && isRequired);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
        if (value) {
            setIsRed(false);
        }
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Mods = {
        [cls.focused]: isFocused && !isRed,
        [cls.red]: isRed && !isFocused,
        [cls.redFocused]: isFocused && isRed,
        [cls.number]: isNumber,
    };

    return (
        <VStack
            className={classNames(cls.Input, mods, [className])}
            gap="4"
        >
            {isNumber && (
                <Icon
                    Svg={ruFlagInputIcon}
                    theme={IconTheme.CLEAN}
                    className={cls.flag}
                />
            )}
            <input
                className={cls.field}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                type={type}
                placeholder={placeholder}
                {...otherProps}
            />
            {isRequired && (
                <HStack
                    gap="4"
                    align="start"
                >
                    {isRed && (
                        <Icon
                            Svg={circleExclamationIcon}
                            theme={IconTheme.CLEAN}
                        />
                    )}
                    <Text
                        theme={TextTheme.GREY}
                        size={TextSize.BODY_S_MEDIUM_DESKTOP}
                        className={cls.requiredText}
                    >
                        {t('Обязательно для заполнения')}
                    </Text>
                </HStack>
            )}
        </VStack>
    );
});
