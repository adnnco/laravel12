import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import HeadingSmall from '@/components/heading-small';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Teams',
        href: route('teams.index'),
    },
    {
        title: 'Create',
        href: '#',
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <HeadingSmall title="Create Team" description="Modify the details of the selected team." />
            </div>
        </AppLayout>
    );
}
