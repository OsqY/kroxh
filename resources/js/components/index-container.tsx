import { Head } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function IndexContainer({
                                           title,
                                           breadcrumbs = [],
                                           createRoute = null,
                                           createLabel = 'Crear',
                                           createIcon = null,
                                           flash = null,
                                           children,
                                           actions = null
                                       }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {flash?.message && (
                                <div
                                    className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded mb-4">
                                    {flash.message}
                                </div>
                            )}

                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
                                <div className="flex space-x-2">
                                    {actions}
                                    {createRoute && (
                                        <Link href={createRoute}>
                                            <Button>
                                                {createIcon}
                                                {createLabel}
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
