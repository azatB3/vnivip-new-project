import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { useParams } from 'react-router-dom';
import cls from './NewsDetailsPageMobile.module.scss';

interface NewsDetailsPageMobileProps {
    className?: string;
}

const NewsDetailsPageMobile = memo((props: NewsDetailsPageMobileProps) => {
    const {
        className,
    } = props;
    const { id } = useParams();

    return (
        <VStack
            className={classNames(cls.NewsDetailsPageMobile, {}, [className])}
        >
            {`Текст статьи - ${id}`}
        </VStack>
    );
});

export default NewsDetailsPageMobile;
