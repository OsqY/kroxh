import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import TallaForm from '@/pages/Talla/TallaForm';
import ColorForm from '@/pages/Color/ColorForm';
import FormContainer from '@/components/form-container';

export default function Create({ auth }) {
    return (
        <FormContainer
            title="Crear Color"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Colores', href: route('colores.index') },
                { label: 'Crear Color' }
            ]}
        >
            <ColorForm />
        </FormContainer>
    );
}
