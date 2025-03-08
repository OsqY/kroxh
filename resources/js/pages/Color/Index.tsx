import { DataTable } from '@/components/data-table.jsx';
import { PlusCircle } from 'lucide-react';
import { columns } from '@/components/Color/Columns';
import IndexContainer from '@/components/index-container';

export default function Index({colores, flash }) {
    const breadcrumbs = [
        {
            title: 'Dashboard',
            href: route('dashboard')
        },
        {
            title: 'Colores',
            href: route('colores.index')
        }
    ];

    return (
        <IndexContainer
            title="Colores"
            breadcrumbs={breadcrumbs}
            createRoute={route('colores.create')}
            createLabel="Crear Nuevo"
            createIcon={<PlusCircle className="h-4 w-4 mr-2" />}
            flash={flash}
        >
            <DataTable columns={columns} data={colores} />
        </IndexContainer>
    );
}

