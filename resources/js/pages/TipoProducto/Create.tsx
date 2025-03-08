import { Head } from '@inertiajs/react';
import AuthLayout from '@/layouts/auth-layout.js';
import TipoProductoForm from '@/pages/TipoProducto/TipoProductoForm';
import AppLayout from '@/layouts/app-layout';

export default function Create({ auth }) {
    return (
        <AppLayout
        >
            <Head title="Crear Tipo de Producto" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <TipoProductoForm />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
