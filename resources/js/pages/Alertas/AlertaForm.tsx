import FormCard from '@/components/form-card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useForm } from '@inertiajs/react';

export default function AlertaForm({ alerta: alerta = null }) {
    const { data, setData, errors, post, put, processing } = useForm({
        nombre: alerta ? alerta.nombre : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (alerta) {
            put(route('alertas.update'), alerta.id);
        } else {
            post(route('alertas.store'));
        }
    };
    return (
        <FormCard
            title={`${alerta ? 'Editar' : 'Crear'} Alerta`}
            onSubmit={handleSubmit}
            processing={processing}
            submitLabel={alerta ? 'Actualizar' : 'Guardar'}
        >
            <div className="space-y-2">
                <Label htmlFor="nombre" className="dark:text-gray-200">Nombre</Label>
                <Input
                    id="nombre"
                    value={data.nombre}
                    onChange={e => setData('nombre', e.target.value)}
                    placeholder="Nombre de la Alerta"
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
