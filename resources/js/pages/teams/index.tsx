import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type Team } from '@/types';

import { columns } from '@/components/teams/columns';
import { DataTable } from '@/components/ui/data-table';
import { useEffect, useState } from 'react';

export default function Index({ teams }: { teams: Team[] }) {
    const [data, setData] = useState<Team[]>(teams);

    useEffect(() => {
        setData(teams);
    }, [teams]);

    return (
        <AppLayout>
            <Head title="Teams List" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </AppLayout>
    );
}
