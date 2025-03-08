import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.js';
import { Button } from '@/components/ui/button.js';
import { MoreHorizontal } from 'lucide-react';
import { router } from '@inertiajs/core';

export const inventarioPrendasColumns = [
    {
        accessorKey: 'prenda.nombre',
        header: 'Prenda',
        cell: ({ row }) => row.original.prenda?.nombre || 'No asignada'
    },
    {
        accessorKey: 'cantidad',
        header: 'Cantidad'
    },
    {
        accessorKey: 'alerta.nombre',
        header: 'Alerta',
        cell: ({ row }) => row.original.alerta?.nombre || 'No asignada'
    },
    {
        id: 'actions',
        header: 'Acciones',
        cell: ({ row }) => {
            const inventario = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menú</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(color.id)}
                        >
                            Copiar ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.visit(route('inventario-prendas.edit', inventario.id))}
                        >
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                if (confirm('¿Estás seguro que deseas eliminar este inventario?')) {
                                    router.delete(route('prendas.destroy', inventario.id));
                                }
                            }}
                            className="text-red-600"
                        >
                            Eliminar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        }
    }
];
