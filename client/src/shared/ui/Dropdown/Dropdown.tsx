import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo } from 'react';
import { Link } from 'react-router-dom';
import { AppPaths } from 'shared/config/routeConfig/routeConfig';
import ArrowDownIcon from 'shared/assets/icons/arrow-down-small-24-24-white.svg';
import cls from './Dropdown.module.scss';

export interface DropdownData {
    path: AppPaths;
    text: string;
}

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    sectionName: string;
    data: DropdownData[];
    sectionPath: AppPaths;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        children,
        sectionName,
        sectionPath,
        data,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Dropdown, {}, [className])}
            {...otherProps}
        >
            <Link
                to={sectionPath}
                key={sectionPath}
                className={cls.section}
            >
                {sectionName}
                <ArrowDownIcon />
                <div
                    className={cls.sectionUnderline}
                />
            </Link>
            <div
                className={cls.menuBg}
            >
                <div
                    className={cls.list}
                >
                    {data.map(({ path, text }) => (
                        <div
                            className={cls.itemMenu}
                        >
                            <Link
                                to={path}
                                key={path}
                                className={cls.itemMenuText}
                            >
                                {text}
                                <div
                                    className={cls.underline}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
