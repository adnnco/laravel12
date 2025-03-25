import { Head } from '@inertiajs/react';

    import AppearanceTabs from '@/components/appearance-tabs';
    import AppearanceLayoutTabs from '@/components/appearance-layout-tabs';

    import HeadingSmall from '@/components/heading-small';
    import { type BreadcrumbItem } from '@/types';

    import AppLayout from '@/layouts/app-layout';
    import SettingsLayout from '@/layouts/settings/layout';
    import { useLayoutTab } from '@/hooks/use-layout-tab';

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Appearance settings',
            href: '/settings/appearance',
        },
    ];

    export default function Appearance() {
        const { layoutTab } = useLayoutTab();

        return (
            <AppLayout breadcrumbs={breadcrumbs} layout={layoutTab}>
                <Head title="Appearance settings" />

                <SettingsLayout>
                    <div className="space-y-6">
                        <HeadingSmall title="Appearance settings" description="Update your account's appearance settings" />
                        <AppearanceTabs />

                        <HeadingSmall title="App Layout settings" description="Update your app's layout settings" />
                        <AppearanceLayoutTabs />
                    </div>
                </SettingsLayout>
            </AppLayout>
        );
    }
