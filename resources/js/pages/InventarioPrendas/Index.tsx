import IndexContainer from '@/components/index-container';
import { PlusCircle } from 'lucide-react';
import { DataTable } from '@/components/data-table';
import { inventarioPrendasColumns } from '@/components/InventarioPrendas/InventarioPrendasColumns';

export default function Index({ inventarios, flash }) {
    console.log(inventarios);
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Inventario de Prendas' }
    ];

    return (
        <IndexContainer
            title="Prendas"
            breadcrumbs={breadcrumbs}
            createRoute={route('inventario-prendas.create')}
            createLabel="Crear Prenda"
            createIcon={<PlusCircle className="h-4 w-4 mr-2" />}
            flash={flash}
        >
            <DataTable columns={inventarioPrendasColumns} data={inventarios} />
        </IndexContainer>
    );
}
