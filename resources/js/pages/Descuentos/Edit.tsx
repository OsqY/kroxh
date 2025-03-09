import FormContainer from '@/components/form-container';
import DescuentoForm from '@/pages/Descuentos/DescuentoForm';

export default function Edit({ errors, descuento }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Descuentos', href: route('descuentos.index') },
        { title: 'Editar Descuento' }
    ];

    return (

        <FormContainer title="Editar Descuento"
                       breadcrumbs={breadcrumbs}
        >
            <div>
                {errors.error && (
                    <div className="alert alert-danger">
                        {errors.error}
                    </div>
                )}
            </div>
            <DescuentoForm descuento={descuento} />
        </FormContainer>
    );
}
