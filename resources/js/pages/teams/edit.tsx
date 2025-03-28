import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Team } from '@/types';
import { Head, router } from '@inertiajs/react';

import { useEffect, useState } from 'react';
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
        title: 'Edit',
        href: '#',
    },
];

export default function Edit({ team }: { team: Team[] }) {
    const [data, setData] = useState<Team[]>(team);

    useEffect(() => {
        setData(team);
    }, [team]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <HeadingSmall title="Edit Team" description="Modify the details of the selected team." />

            </div>
        </AppLayout>
    );
}
