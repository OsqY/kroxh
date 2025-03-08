import { Head, Link } from '@inertiajs/react';
import { DataTable } from '@/components/data-table.jsx';
import { Button } from '@/components/ui/button.js';
import { PlusCircle } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { columns } from '@/components/Color/Columns';

export default function Index({ auth, colores, flash }) {

    return (
        <AppLayout
        >
            <Head title="Colores" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {flash?.message && (
                                <div
                                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                    {flash.message}
                                </div>
                            )}

                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Colores</h1>
                                <Link href={route('colores.create')}>
                                    <Button>
                                        <PlusCircle className="h-4 w-4 mr-2" />
                                        Crear Nuevo
                                    </Button>
                                </Link>
                            </div>

                            <DataTable columns={columns} data={colores} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

