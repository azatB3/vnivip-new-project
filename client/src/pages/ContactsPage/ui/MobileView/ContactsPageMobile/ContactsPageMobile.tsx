import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page';
import cls from './ContactsPageMobile.module.scss';

interface ContactsPageMobileProps {
    className?: string;
}

const ContactsPageMobile = memo((props: ContactsPageMobileProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ContactsPageMobile, {}, [className])}>
            ContactsPageMobile
        </Page>
    );
});

export default ContactsPageMobile;
