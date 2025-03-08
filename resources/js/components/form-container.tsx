import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function FormContainer({ children, title, breadcrumbs = [], backUrl = null, actions = null }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        </AppLayout>
    );
}
