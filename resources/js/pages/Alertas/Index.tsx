import IndexContainer from '@/components/index-container';
import { PlusCircle } from 'lucide-react';
import { DataTable } from '@/components/data-table';
import { alertasColumns } from '@/components/Alerta/AlertasColumns';

export default function Index({ alertas, flash }) {
    const breadcrumbs = [
        {
            title: 'Dashboard',
            href: route('dashboard')
        },
        {
            title: 'Alertas',
            href: route('alertas.index')
        }
    ];

    return (
        <IndexContainer
            title="Alertas"
            breadcrumbs={breadcrumbs}
            createRoute={route('alertas.create')}
            createLabel="Crear Nueva"
            createIcon={<PlusCircle className="h-4 w-4 mr-2" />}
            flash={flash}
        >
            <DataTable columns={alertasColumns} data={alertas} />
        </IndexContainer>
    );
}
