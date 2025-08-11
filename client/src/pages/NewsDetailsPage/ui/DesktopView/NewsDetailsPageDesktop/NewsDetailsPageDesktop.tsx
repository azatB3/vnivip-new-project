import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { useParams } from 'react-router-dom';
import { Cover, CoverSize } from 'shared/ui/Cover/DesktopView/Cover';
import cover3Img from 'shared/assets/images/cover3.jpg';
import cls from './NewsDetailsPageDesktop.module.scss';

interface NewsDetailsPageDesktopProps {
    className?: string;
}

const NewsDetailsPageDesktop = memo((props: NewsDetailsPageDesktopProps) => {
    const {
        className,
    } = props;
    const { id } = useParams();

    return (
        <VStack
            className={classNames(cls.NewsDetailsPageDesktop, {}, [className])}
            gap={50}
        >
            <Cover
                size={CoverSize.SMALL}
                src={cover3Img}
            />
            {`Текст статьи - ${id}`}
        </VStack>
    );
});

export default NewsDetailsPageDesktop;
