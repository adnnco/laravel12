import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import { useLayoutTab } from '@/hooks/use-layout-tab';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {
    const { layoutTab } = useLayoutTab();
    const LayoutComponent = layoutTab === 'sidebar' ? AppSidebarLayout : AppHeaderLayout;

    return (
        <LayoutComponent breadcrumbs={breadcrumbs} {...props}>
            {children}
        </LayoutComponent>
    );
}
