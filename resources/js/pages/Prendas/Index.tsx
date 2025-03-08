import IndexContainer from "@/components/index-container";
import { PlusCircle } from "lucide-react";
import { DataTable } from '@/components/data-table';
import { prendasColumns } from '@/components/Prendas/PrendasColumns';

export default function Index({ prendas, flash }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Prendas' }
    ];

    return (
        <IndexContainer
            title="Prendas"
            breadcrumbs={breadcrumbs}
            createRoute={route('prendas.create')}
            createLabel="Crear Prenda"
            createIcon={<PlusCircle className="h-4 w-4 mr-2" />}
            flash={flash}
        >
            <DataTable columns={prendasColumns} data={prendas} />
        </IndexContainer>
    );
}
