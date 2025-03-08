import { Head } from '@inertiajs/react';
import AuthLayout from '@/layouts/auth-layout.js';
import TipoProductoForm from '@/pages/TipoProducto/TallaForm';
import AppLayout from '@/layouts/app-layout.js';

export default function Edit({ auth, tipoProducto }) {
    return (
        <AppLayout
        >
            <Head title="Editar Tipo de Producto" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <TipoProductoForm tipoProducto={tipoProducto} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
