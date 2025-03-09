import FormContainer from '@/components/form-container';
import DescuentoForm from '@/pages/Descuentos/DescuentoForm';

export default function Create({  errors }) {
    const breadcrumbs = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Descuentos', href: route('descuentos.index') },
        { title: 'Crear Descuento' }
    ];

    return (

        <FormContainer title="Crear Descuento"
                       breadcrumbs={breadcrumbs}
        >
            <div>
                {errors.error && (
                    <div className="alert alert-danger">
                        {errors.error}
                    </div>
                )}
            </div>
            <DescuentoForm/>
        </FormContainer>
    );
}
