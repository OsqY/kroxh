import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import TallaForm from '@/pages/Talla/TallaForm';
import ColorForm from '@/pages/Color/ColorForm';

export default function Create({ auth }) {
    return (
        <AppLayout
        >
            <Head title="Crear Color" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <ColorForm />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
