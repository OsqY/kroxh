import FormContainer from '@/components/form-container';
import AlertaForm from '@/pages/Alertas/AlertaForm';

export default function Edit({alerta}) {
    return (
        <FormContainer
            title="Editar Alerta"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Alertas', href: route('alertas.index') },
                { label: 'Editar Alerta' }
            ]}
        >
            <AlertaForm alerta={alerta}/>
        </FormContainer>
    );
}
