import { Head } from '@inertiajs/react';
import TipoProductoForm from '@/pages/TipoProducto/TallaForm';
import AppLayout from '@/layouts/app-layout.js';
import TallaForm from '@/pages/Talla/TallaForm.js';

export default function Edit({ auth, talla }) {
    return (
        <AppLayout
        >
            <Head title="Editar Talla" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <TallaForm talla={talla} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
