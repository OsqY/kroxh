import FormContainer from '@/components/form-container';
import PrendaForm from '@/pages/Prendas/PrendaForm';

export default function Edit({ prenda, tipoProductos, tallas, colores }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Prendas', href: route('prendas.index') },
        { title: ' Prenda' }
    ];

    return (
        <FormContainer title="Editar Prenda"
                       breadcrumbs={breadcrumbs}
        >
            <PrendaForm
                prenda={prenda}
                tipoProductos={tipoProductos}
                tallas={tallas}
                colores={colores}
            />
        </FormContainer>
    );
}
