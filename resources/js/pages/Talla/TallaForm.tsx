import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button.js';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.js';
import { Alert, AlertDescription } from '@/components/ui/alert.js';
import { Input } from '@/components/ui/input.js';
import { Label } from '@/components/ui/label.js';
import { ArrowLeft, Save } from 'lucide-react';
import FormCard from '@/components/form-card';

export default function TallaForm({ talla: talla = null }) {
    const { data, setData, errors, post, put, processing } = useForm({
        nombre: talla ? talla.nombre : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (talla) {
            put(route('tallas.update', talla.id));
        } else {
            post(route('tallas.store'));
        }
    };

    return (
        <FormCard
            title={`${talla ? 'Editar' : 'Crear'} Talla`}
            onSubmit={handleSubmit}
            processing={processing}
            submitLabel={talla ? 'Actualizar' : 'Guardar'}
        >
            <div className="space-y-2">
                <Label htmlFor="nombre" className="dark:text-gray-200">Nombre</Label>
                <Input
                    id="nombre"
                    value={data.nombre}
                    onChange={e => setData('nombre', e.target.value)}
                    placeholder="Nombre del tipo de producto"
                    className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.nombre ? 'border-red-500 dark:border-red-500' : ''}`}
                />
                {errors.nombre && (
                    <Alert variant="destructive"
                           className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                        <AlertDescription>{errors.nombre}</AlertDescription>
                    </Alert>
                )}
            </div>
        </FormCard>
    );


}

