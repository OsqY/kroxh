import FormContainer from '@/components/form-container';
import PrendaForm from '@/pages/Prendas/PrendaForm';

export default function Create({ tipoProductos, tallas, colores }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Prendas', href: route('prendas.index') },
        { title: 'Crear Prenda' }
    ];

    return (
        <FormContainer title="Crear Prenda"
            breadcrumbs={breadcrumbs}
        >
            <PrendaForm
                tipoProductos={tipoProductos}
                tallas={tallas}
                colores={colores}
            />
        </FormContainer>
    );
}
