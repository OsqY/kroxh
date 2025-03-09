import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.js';
import { Button } from '@/components/ui/button.js';
import { MoreHorizontal } from 'lucide-react';
import { router } from '@inertiajs/core';

export const descuentosColumns = [
    {
        accessorKey: 'nombre',
        header: 'Nombre'
    },
    {
        accessorKey: 'valor_porcentaje',
        header: 'Porcentaje de descuento',
        cell: ({ row }) => row.getValue('valor_porcentaje') + '%'
    },
    {
        accessorKey: 'fecha_inicio',
        header: 'Fecha de Inicio',
        cell: ({ row }) => {
            const date = new Date(row.getValue('fecha_inicio'));
            return date.toLocaleString();
        }
    },
    {
        accessorKey: 'fecha_fin',
        header: 'Fecha de Finalización',
        cell: ({ row }) => {
            const date = new Date(row.getValue('fecha_fin'));
            return date.toLocaleString();
        }
    },
    {
        accessorKey: 'minimo_compra',
        header: 'Mínimo de compra',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('minimo_compra'));
            const formatted = new Intl.NumberFormat('HN-ES', {
                style: 'currency',
                currency: 'LPS'
            }).format(isNaN(amount) ? 0 : amount);
            return formatted;
        }
    },
    {
        accessorKey: 'codigo',
        header: 'Código'
    },
    {
        id: 'actions',
        header: 'Acciones',
        cell: ({ row }) => {
            const descuento = row.original;

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
                            onClick={() => navigator.clipboard.writeText(descuento.id)}
                        >
                            Copiar ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.visit(route('descuentos.edit', descuento.id))}
                        >
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                if (confirm('¿Estás seguro que deseas eliminar esta descuento?')) {
                                    router.delete(route('descuentos.destroy', descuento.id));
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
