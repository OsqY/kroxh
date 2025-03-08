import FormCard from '@/components/form-card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';

export default function PrendaForm({ prenda = null, tipoProductos = [], tallas = [], colores = [] }) {
    const { data, setData, errors, post, put, processing } = useForm({
        nombre: prenda?.nombre || '',
        descripcion: prenda?.descripcion || '',
        precio_base: prenda?.precio_base || '',
        tipo_producto_id: prenda?.tipo_producto_id ? prenda.tipo_producto_id.toString() : '',
        talla_id: prenda?.talla_id ? prenda.talla_id.toString() : '',
        color_id: prenda?.color_id ? prenda.color_id.toString() : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (prenda) {
            put(route('prendas.update', prenda.id));
        } else {
            post(route('prendas.store'));
        }
    };

    return (
        <FormCard
            title={`${prenda ? 'Editar' : 'Crear'} Prenda`}
            onSubmit={handleSubmit}
            processing={processing}
            submitLabel={prenda ? 'Actualizar' : 'Guardar'}
        >
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="nombre" className="dark:text-gray-200">Nombre</Label>
                    <Input
                        id="nombre"
                        value={data.nombre}
                        onChange={e => setData('nombre', e.target.value)}
                        placeholder="Nombre de la prenda"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.nombre ? 'border-red-500 dark:border-red-500' : ''}`}
                    />
                    {errors.nombre && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.nombre}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="descripcion" className="dark:text-gray-200">Descripción</Label>
                    <Textarea
                        id="descripcion"
                        value={data.descripcion}
                        onChange={e => setData('descripcion', e.target.value)}
                        placeholder="Descripción de la prenda"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.descripcion ? 'border-red-500 dark:border-red-500' : ''}`}
                        rows={3}
                    />
                    {errors.descripcion && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.descripcion}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="precio" className="dark:text-gray-200">Precio base</Label>
                    <Input
                        id="precio"
                        type="number"
                        step="0.01"
                        value={data.precio_base}
                        onChange={e => setData('precio_base', e.target.value)}
                        placeholder="0.00"
                        className={`dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.precio ? 'border-red-500 dark:border-red-500' : ''}`}
                    />
                    {errors.precio && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.precio}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="tipo_producto_id" className="dark:text-gray-200">Tipo de Producto</Label>
                    <Select
                        value={data.tipo_producto_id}
                        onValueChange={(value) => setData('tipo_producto_id', value)}
                    >
                        <SelectTrigger
                            className={`w-full dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.tipo_producto_id ? 'border-red-500 dark:border-red-500' : ''}`}>
                            <SelectValue placeholder="Selecciona un tipo de producto" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800">
                            {tipoProductos.map((tipo) => (
                                <SelectItem key={tipo.id} value={tipo.id.toString()}>
                                    {tipo.nombre}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.tipo_producto_id && (
                        <Alert variant="destructive"
                               className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                            <AlertDescription>{errors.tipo_producto_id}</AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="talla_id" className="dark:text-gray-200">Talla</Label>
                        <Select
                            value={data.talla_id}
                            onValueChange={(value) => setData('talla_id', value)}
                        >
                            <SelectTrigger
                                className={`w-full dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.talla_id ? 'border-red-500 dark:border-red-500' : ''}`}>
                                <SelectValue placeholder="Selecciona una talla" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-gray-800">
                                {tallas.map((talla) => (
                                    <SelectItem key={talla.id} value={talla.id.toString()}>
                                        {talla.nombre}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.talla_id && (
                            <Alert variant="destructive"
                                   className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                                <AlertDescription>{errors.talla_id}</AlertDescription>
                            </Alert>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="color_id" className="dark:text-gray-200">Color</Label>
                        <Select
                            value={data.color_id}
                            onValueChange={(value) => setData('color_id', value)}
                        >
                            <SelectTrigger
                                className={`w-full dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.color_id ? 'border-red-500 dark:border-red-500' : ''}`}>
                                <SelectValue placeholder="Selecciona un color" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-gray-800">
                                {colores.map((color) => (
                                    <SelectItem key={color.id} value={color.id.toString()}>
                                        {color.nombre}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.color_id && (
                            <Alert variant="destructive"
                                   className="mt-2 py-2 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
                                <AlertDescription>{errors.color_id}</AlertDescription>
                            </Alert>
                        )}
                    </div>
                </div>
            </div>
        </FormCard>
    );
}
