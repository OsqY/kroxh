import FormContainer from '@/components/form-container';
import AlertaForm from '@/pages/Alertas/AlertaForm';

export default function Create() {
    return (
        <FormContainer
            title="Crear Alerta"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Alertas', href: route('alertas.index') },
                { label: 'Crear Alerta' }
            ]}
        >
            <AlertaForm />
        </FormContainer>
    );
}
