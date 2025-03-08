import FormContainer from '@/components/form-container';
import TallaForm from '@/pages/Talla/TallaForm';

export default function Edit({ talla }) {
    return (
        <FormContainer
            title="Editar Talla"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Tallas', href: route('tallas.index') },
                { label: 'Editar Talla' }
            ]}
        >
            <TallaForm talla={talla} />
        </FormContainer>
    );
}
