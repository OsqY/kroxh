import FormContainer from '@/components/form-container';
import InventarioPrendaForm from '@/pages/InventarioPrendas/InventarioPrendaForm';

export default function Edit({inventario,prendas}) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Inventario de Prendas', href: route('inventario-prendas.index') },
        { title: 'Editar Inventario de Prendas' }
    ];

    return (
        <FormContainer title="Editar Inventario"
                       breadcrumbs={breadcrumbs}
        >
            <InventarioPrendaForm
                inventario={inventario}
                prendas={prendas}
            />
        </FormContainer>
    );
}
