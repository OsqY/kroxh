import { useForm } from '@inertiajs/react';
import FormCard from '@/components/form-card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function InventarioPrendaForm({ inventario = null, prendas = [] }) {
    const { data, setData, errors, post, put, processing } = useForm({
        cantidad: inventario?.cantidad || '',
        prenda: inventario?.prenda_id ? inventario?.prenda_id.toString() : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inventario) {
            put(route('inventario-prendas.update', inventario.id));
        } else {
            post(route('inventario-prendas.store'));
        }
    };

    return (
        <FormCard
            title={`${inventario ? 'Editar' : 'Crear'} Inventario de Prendas`}
            onSubmit={handleSubmit}
            processing={processing}
            submitLabel={inventario ? 'Actualizar' : 'Guardar'}
        >
            <div className="space-y-4">

                <div className="space-y-2">
                    <Label htmlFor="precio" className="dark:text-gray-200">Cantidad</Label>
                    <Input
                        id="precio"
                        type="number"
                        step="1"
                        value={data.cantidad}
                        onChange={e => setData('cantidad', e.target.value)}
                        placeholder="0"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.precio ? 'border-red-500 dark:border-red-500' : ''}`}
                    />
                    {errors.cantidad && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.cantidad}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="color_id" className="dark:text-gray-200">Prenda</Label>
                    <Select
                        value={data.prenda_id}
                        onValueChange={(value) => setData('prenda_id', value)}
                    >
                        <SelectTrigger
                            className={`w-full dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.color_id ? 'border-red-500 dark:border-red-500' : ''}`}>
                            <SelectValue placeholder="Selecciona una prenda" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800">
                            {prendas.map((prenda) => (
                                <SelectItem key={prenda.id} value={prenda.id.toString()}>
                                    {prenda.nombre}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.prenda_id && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.prenda_id}</AlertDescription>
                        </Alert>
                    )}
                </div>
            </div>
        </FormCard>
    );
}
