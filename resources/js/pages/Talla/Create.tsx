import TallaForm from '@/pages/Talla/TallaForm';
import FormContainer from '@/components/form-container';

export default function Create() {
    return (
        <FormContainer
            title="Editar Talla"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Tallas', href: route('tallas.index') },
                { label: 'Editar Talla' }
            ]}
        >
            <TallaForm />
        </FormContainer>
    );
}
