import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout.js';
import ColorForm from '@/pages/Color/ColorForm';
import FormContainer from '@/components/form-container';

export default function Edit({ color }) {
    return (
        <FormContainer
            title="Editar Color"
            breadcrumbs={[
                { label: 'Dashboard', href: route('dashboard') },
                { label: 'Colores', href: route('colores.index') },
                { label: 'Editar Color' }
            ]}
        >
            <ColorForm color={color} />
        </FormContainer>
    );
}
