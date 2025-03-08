import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button.js';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.js';
import { Alert, AlertDescription } from '@/components/ui/alert.js';
import { Input } from '@/components/ui/input.js';
import { Label } from '@/components/ui/label.js';
import { ArrowLeft, Save } from 'lucide-react';

export default function TipoProductoForm({ tipoProducto = null }) {
    const { data, setData, errors, post, put, processing } = useForm({
        nombre: tipoProducto ? tipoProducto.nombre : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tipoProducto) {
            put(route('tipo-productos.update', tipoProducto.id));
        } else {
            post(route('tipo-productos.store'));
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>{tipoProducto ? 'Editar' : 'Crear'} Tipo de Producto</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input
                            id="nombre"
                            value={data.nombre}
                            onChange={e => setData('nombre', e.target.value)}
                            placeholder="Nombre del tipo de producto"
                            className={errors.nombre ? 'border-red-500' : ''}
                        />
                        {errors.nombre && (
                            <Alert variant="destructive" className="mt-2 py-2">
                                <AlertDescription>{errors.nombre}</AlertDescription>
                            </Alert>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between my-6">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => window.history.back()}
                        disabled={processing}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver
                    </Button>
                    <Button type="submit" disabled={processing}>
                        <Save className="mr-2 h-4 w-4" />
                        {tipoProducto ? 'Actualizar' : 'Guardar'}
                    </Button>
                </CardFooter>
            </form>
        </Card>);
}

