import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem, type Team } from '@/types';

import { columns } from '@/components/teams/columns';
import { DataTable } from '@/components/ui/data-table';
import { useEffect, useState } from 'react';
import HeadingSmall from '@/components/heading-small';
import { buttonVariants } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Teams',
        href: route('teams.index'),
    },
];

export default function Index({ teams }: { teams: Team[] }) {
    const [data, setData] = useState<Team[]>(teams);

    useEffect(() => {
        setData(teams);
    }, [teams]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Teams Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <HeadingSmall title="Teams Overview" description="A comprehensive list of all teams in the organization." />

                <div className="container mx-auto">
                    <Link href={route('teams.create')} className={'mb-4 ' + buttonVariants({ variant: 'default', size: 'sm' })}>
                        <PlusCircle className="h-4 w-4" />
                        Create Team
                    </Link>

                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </AppLayout>
    );
}
