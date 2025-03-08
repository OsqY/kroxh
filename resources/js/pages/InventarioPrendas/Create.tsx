import FormContainer from '@/components/form-container';
import InventarioPrendaForm from '@/pages/InventarioPrendas/InventarioPrendaForm';

export default function Create({ prendas, errors }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Inventario de Prendas', href: route('inventario-prendas.index') },
        { title: 'Crear Inventario de Prendas' }
    ];

    return (

        <FormContainer title="Crear Inventario"
                       breadcrumbs={breadcrumbs}
        >
            <div>
                {errors.error && (
                    <div className="alert alert-danger">
                        {errors.error}
                    </div>
                )}
                <InventarioPrendaForm
                    prendas={prendas}
                />
        </FormContainer>
);
}
