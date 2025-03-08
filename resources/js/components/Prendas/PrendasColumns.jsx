import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.js';
import { Button } from '@/components/ui/button.js';
import { MoreHorizontal } from 'lucide-react';
import { router } from '@inertiajs/core';

export const prendasColumns = [
    {
        accessorKey: 'codigo',
        header: 'Código Prenda'
    },
    {
        accessorKey: 'nombre',
        header: 'Nombre'
    },
    {
        accessorKey: 'tipo_producto.nombre',
        header: 'Tipo de Producto',
        cell: ({ row }) => row.original.tipo_producto?.nombre || 'No asignado'
    },
    {
        accessorKey: 'talla.nombre',
        header: 'Talla',
        cell: ({ row }) => row.original.talla?.nombre || 'No asignada'
    },
    {
        accessorKey: 'color.nombre',
        header: 'Color',
        cell: ({ row }) => row.original.color?.nombre || 'No asignado'
    },
    {
        accessorKey: 'precio_base',
        header: 'Precio',
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('precio_base'));
            const formatted = new Intl.NumberFormat('HN-ES', {
                style: 'currency',
                currency: 'LPS'
            }).format(amount);
            return formatted;
        }
    },
    {
        id: "actions",
        header:"Acciones",
        cell: ({ row }) => {
            const prenda = row.original;

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
                            onClick={() => navigator.clipboard.writeText(prenda.id)}
                        >
                            Copiar ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.visit(route('prendas.edit', prenda.id))}
                        >
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                if (confirm('¿Estás seguro que deseas eliminar esta prenda?')) {
                                    router.delete(route('prendas.destroy', prenda.id))
                                }
                            }}
                            className="text-red-600"
                        >
                            Eliminar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
];
