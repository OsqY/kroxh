import { DataTable } from '@/components/data-table.jsx';
import { PlusCircle } from 'lucide-react';
import IndexContainer from '@/components/index-container';
import { columns } from '@/components/Talla/Columns';

export default function Index({ tallas, flash }) {
    const breadcrumbs = [
        {
            title: 'Dashboard',
            href: route('dashboard')
        },
        {
            title: 'Tallas',
            href: route('tallas.index')
        }
    ];

    return (
        <IndexContainer
            title="Tallas"
            breadcrumbs={breadcrumbs}
            createRoute={route('tallas.create')}
            createLabel="Crear Nuevo"
            createIcon={<PlusCircle className="h-4 w-4 mr-2" />}
            flash={flash}
        >
            <DataTable columns={columns} data={tallas} />
        </IndexContainer>
    );
}
