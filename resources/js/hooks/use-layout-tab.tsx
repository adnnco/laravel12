import { useCallback, useEffect, useState } from 'react';

export type LayoutTab = 'sidebar' | 'header';

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const applyTheme = (layoutTab: LayoutTab) => {
   console.log(layoutTab);
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

const handleSystemThemeChange = () => {
    const currentLayoutTab = localStorage.getItem('layoutTab') as LayoutTab;
    applyTheme(currentLayoutTab || 'system');
};

export function initializeTheme() {
    const savedLayoutTab = (localStorage.getItem('layoutTab') as LayoutTab) || 'system';

    applyTheme(savedLayoutTab);

    // Add the event listener for system theme changes...
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
}

export function useLayoutTab() {
    const [layoutTab, setLayoutTab] = useState<LayoutTab>('sidebar');

    const updateLayoutTab = useCallback((mode: LayoutTab) => {
        setLayoutTab(mode);

        // Store in localStorage for client-side persistence...
        localStorage.setItem('layoutTab', mode);

        // Store in cookie for SSR...
        setCookie('layoutTab', mode);

        applyTheme(mode);
    }, []);

    useEffect(() => {
        const savedLayoutTab = localStorage.getItem('layoutTab') as LayoutTab | null;
        updateLayoutTab(savedLayoutTab || 'sidebar');

        return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
    }, [updateLayoutTab]);

    return { layoutTab, updateLayoutTab } as const;
}
