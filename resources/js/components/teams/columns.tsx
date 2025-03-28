'use client';

import { type Team } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';

export const columns: ColumnDef<Team>[] = [
    {
        accessorKey: 'id',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Id
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'logo',
        header: 'Logo',
        cell: ({ row }) => {
            return <img src={row.getValue('logo')} alt={row.getValue('name')} className="h-[24px] w-[24px] rounded-sm" />;
        },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Team Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'national',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    National Team
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            return row.getValue('national') ? <Badge variant="outline">Yes</Badge> : <Badge variant="secondary">No</Badge>;
        },
    },

    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const team = row.original;

            const handleDelete = (id: number) => {
                if (confirm(`Are you sure you want to delete ${team.name}`)) {
                    router.delete(route('teams.destroy', { id }));

                    toast.success(`${team.name} deleted successfully`);
                }
            };

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(String(team.id))}>Copy Team ID</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem variant={'destructive'} onClick={() => handleDelete(team.id)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
