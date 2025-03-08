"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.js';
import { Button } from '@/components/ui/button.js';
import { MoreHorizontal } from 'lucide-react';
import { router } from '@inertiajs/core';

export const columns = [
    {
        accessorKey:"id",
        header:"ID",

    },
    {
        accessorKey:"nombre",
        header:"Nombre",
    },
    {
        accessorKey:"created_at",
        header:"Fecha de Creación",
        cell: ({ row }) => {
            const date = new Date(row.getValue("created_at"));
            return <div>{date.toLocaleString()}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const tipoProducto = row.original;

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
                            onClick={() => navigator.clipboard.writeText(tipoProducto.id)}
                        >
                            Copiar ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.visit(route('tipo-productos.edit', tipoProducto.id))}
                        >
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                if (confirm('¿Estás seguro que deseas eliminar este tipo de producto?')) {
                                    router.delete(route('tipo-productos.destroy', tipoProducto.id))
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
]
