import IndexContainer from '@/components/index-container';
import { PlusCircle } from 'lucide-react';
import { DataTable } from '@/components/data-table';
import { descuentosColumns } from '@/components/Descuentos/DescuentosColumns';

export default function Index({ descuentos, flash }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Descuentos' }
    ];

    return (
        <IndexContainer
            title="Descuentos"
            breadcrumbs={breadcrumbs}
            createRoute={route('descuentos.create')}
            createLabel="Crear Descuento"
            createIcon={<PlusCircle className="h-4 w-4 mr-2" />}
            flash={flash}
        >
            <DataTable columns={descuentosColumns} data={descuentos} />
        </IndexContainer>
    );
}
