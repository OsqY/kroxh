import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout.js';
import ColorForm from '@/pages/Color/ColorForm';

export default function Edit({ auth, color }) {
    console.log(color);
    return (
        <AppLayout
        >
            <Head title="Editar Color" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <ColorForm color={color} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
