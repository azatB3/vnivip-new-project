import React, { useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { isDesktop, isMobile } from 'react-device-detect';
import { AppDesktopViewAsync as AppDesktopView } from './AppDesktopView/AppDesktopView.async';
import { AppMobileViewAsync as AppMobileView } from './AppMobileView/AppMobileView.async';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        };
    }, [theme]);

    if (isDesktop) {
        return <AppDesktopView />;
    }

    if (isMobile) {
        return <AppMobileView />;
    }

    return null;
}

export default App;
