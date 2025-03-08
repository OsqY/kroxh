import { Head, Link } from '@inertiajs/react';
import { DataTable } from '@/components/data-table.jsx';
import { Button } from '@/components/ui/button.js';
import { PlusCircle } from 'lucide-react';
import AuthLayout from '@/layouts/auth-layout.js';
import { columns } from '@/components/TipoProducto/Columns';
import AppLayout from '@/layouts/app-layout';
import IndexContainer from '@/components/index-container';

export default function Index({ tipoProductos, flash }) {
    const breadcrumbs = [
        {
            title: 'Dashboard',
            href: route('dashboard')
        },
        {
            title: 'Tipos de Productos',
            href: route('tipo-productos.index')
        }
    ];

    return (
        <IndexContainer
            title="Tipos de Producto"
            breadcrumbs={breadcrumbs}
            createRoute={route('tipo-productos.create')}
            createLabel="Crear Nuevo"
            createIcon={<PlusCircle className="h-4 w-4 mr-2" />}
            flash={flash}
        >
            <DataTable columns={columns} data={tipoProductos} />
        </IndexContainer>
    );
}
