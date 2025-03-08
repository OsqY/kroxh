import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card.js';
import { Button } from '@/components/ui/button.js';
import { router } from '@inertiajs/core';
import { Head } from '@inertiajs/react';
import AuthLayout from '@/layouts/auth-layout.js';
import AppLayout from '@/layouts/app-layout';
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react';

export default function Show({ auth, color }) {
    const handleDelete = () => {
        if (confirm('¿Estás seguro que deseas eliminar este tipo de producto?')) {
            router.delete(route('colores.destroy', color.id));
        }
    };

    return (
        <AppLayout
        >
            <Head title={`Tipo de Producto: ${color.nombre}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">{color.nombre}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">ID</h3>
                                        <p>{color.id}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Nombre</h3>
                                        <p>{color.nombre}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Fecha de creación</h3>
                                        <p>{new Date(color.created_at).toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-500">Última actualización</h3>
                                        <p>{new Date(color.updated_at).toLocaleString()}</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    onClick={() => router.visit(route('colores.index'))}
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Volver
                                </Button>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => router.visit(route('colores.edit', color.id))}
                                    >
                                        <Pencil className="mr-2 h-4 w-4" />
                                        Editar
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={handleDelete}
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Eliminar
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
